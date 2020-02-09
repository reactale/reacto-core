import { _prepValForMaths } from '../util'
/*
* If an "if reacto" is processed, this var will store the bool result
* Next,
* If the next reacto is also "if reacto"
* then result of prev_boolean AND next_boolean will be stored here
* so on...
* If any other reacto is found,
* then, hide that reactos result if this var contains false
* show that reactos result if this var contains true
*
* default is true, because we want to show by default show 
* the results of reacto
*/
let _ifResult = true


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
     * @param {*} tok 
*/
export const _interpret_if = tok => {
    let result = -1;

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
        _ifResult = _ifResult && result;
    }
}