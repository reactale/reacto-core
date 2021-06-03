import { _prepValForMaths, _startsWith } from '../util'
/*
* If an "if reacto" is processed, this var will store the bool result
* Next,
* If the next reacto is also "if reacto"
*
* If reacto determines the show/hide of the upcoming BLOCK
*/
let _ifResult = false
let _chainingCondition = 'OR'  // Defaults to OR // Because only 'OR' can neglect the null/false of before init

const _restoreDefaults = () => {
    _ifResult = false
    _chainingCondition = 'OR'
}

export const get_ifResult = () => _ifResult
export const set_ifResult = v => _ifResult = v

/**
     * This function will interpret If statements and return rTrue or rFalse
     * since "((r.if." and "))" has been stripped from begining and end, here we will only get the following
     * r.var.myNum = 1 (comparison operator, do a == check)
     * r.dt.year > r.var.someSavedYear
     * 4 < 9
     * and all the ! counter parts
     * 
     * For Chaining, the subsequent if reactos must contain .or / .and, e.g.
     * AND reacto => ((r.if.and. 9 > 5))
     * OR reacto => ((r.if.and. 7 > 3))
     * 
     * @param {*} tok 
*/
export const _interpret_if = tok => {
    let result = -1;

    // first determine if it is AND or OR or Default (for first one)
    // also clears the token of initial or. / and. (if any)
    tok = _determineChaningCondition(tok)

    if (tok.indexOf('!=') >= 0) {
        let parts = tok.split('!=');
        result = _prepValForMaths(parts[0]) != _prepValForMaths(parts[1]);
    }
    else if (tok.indexOf('>=') >= 0) {
        let parts = tok.split('>=');
        result = _prepValForMaths(parts[0]) >= _prepValForMaths(parts[1]);
    }
    else if (tok.indexOf('<=') >= 0) {
        let parts = tok.split('<=');
        result = _prepValForMaths(parts[0]) <= _prepValForMaths(parts[1]);
    }
    else if (tok.indexOf('=') >= 0) {
        let parts = tok.split('=');
        result = _prepValForMaths(parts[0]) == _prepValForMaths(parts[1]);
    }
    else if (tok.indexOf('>') >= 0) {
        let parts = tok.split('>');
        result = _prepValForMaths(parts[0]) > _prepValForMaths(parts[1]);
    }
    else if (tok.indexOf('<') >= 0) {
        let parts = tok.split('<');
        result = _prepValForMaths(parts[0]) < _prepValForMaths(parts[1]);
    }

    if (result === -1) {
        return tok;         // i.e. could not interpret, as none of the if else qualified
    }
    else {
        _ifResult = _chainingCondition === 'AND' ? (_ifResult && result) : (_ifResult || result)
        return ''
    }
}

/**
 * Determing if it is a starting if. reacto
 * or a chaning if.and. / if.or.
 * @param {*} tok 
 * @returns 
 */
function _determineChaningCondition (tok) {
    // if it is an AND
    if (_startsWith(tok, 'and.')) {
        tok = tok.substr(4)
        _chainingCondition = 'AND'
    }

    // else if it is an OR
    else if (_startsWith(tok, 'or.')) {
        tok = tok.substr(3)
        _chainingCondition = 'OR'
    }

    // if it was an only if., i.e. no if.and. / if.or. at start
    else {
        // No chaining ?
        // Begining of the Chain ?
        // In any case, restore defaults
        _restoreDefaults()
    }

    return tok
}