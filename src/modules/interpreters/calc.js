import { _prepValForMaths } from '../util'
import { setAllVars } from './var'
/*
    * This function will do basic 4 maths opearion i.e. + - * /
    * ((r.calc. n1 OP n2))
    * n1 and n2 can be any number or reacto
    * OP is anyone of + - * /
    * since "((r.calc." and "))" has been stripped from begining and end, here we will only get the following
    * n1 OP n2
*/
let allCalcResults = [] // This array will keep on storing all Calc results

function _interpret_calc(tok, skipLTP) {
    let result = "";

    if (tok.indexOf('+') >= 0) {
        let parts = tok.split('+');
        parts[0] = _prepValForMaths(parts[0]);
        parts[1] = _prepValForMaths(parts[1]);

        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
            result = parts[0] + parts[1];
        }
    }
    else if (tok.indexOf('-') >= 0) {
        let parts = tok.split('-');
        parts[0] = _prepValForMaths(parts[0]);
        parts[1] = _prepValForMaths(parts[1]);

        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
            result = parts[0] - parts[1];
        }
    }
    else if (tok.indexOf('*') >= 0) {
        let parts = tok.split('*');
        parts[0] = _prepValForMaths(parts[0]);
        parts[1] = _prepValForMaths(parts[1]);

        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
            result = parts[0] * parts[1];
        }
    }
    else if (tok.indexOf('/') >= 0) {
        let parts = tok.split('/');
        parts[0] = _prepValForMaths(parts[0]);
        parts[1] = _prepValForMaths(parts[1]);

        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
            result = parts[0] / parts[1];
        }
    }

    // Store it results array
    allCalcResults.push(result)
    _createSpecialCalcVar()

    if (!skipLTP) {
        if (result === '') {
            // do nothing
        }
        else {
            result = '_r$$_' + result.toString().split('').join('_r$$_');
        }
    }

    return result;
}

/**
 *  https://github.com/reactale/reacto-core/issues/2
 * 
 *  Whenever user does any ((r.calc.)) operation, the result will automatically saved in a special system level ((r.var.))

    This will help user use the and outcome of the calc operations and then do something with it.

    Example

    ((r.calc. 7+2))    // will output 9
    ((r.calc. 1+17))    // will output 18
    ((r.calc. 22+5))    // will output 27


    ((r.var._1))    // Should give last calc. result i.e. 27
    ((r.var._2))    // Should give 18
    ((r.var._3))    // Should give 9
 */
function _createSpecialCalcVar () {
    const len = allCalcResults.length
    const res = {}
    for(let i=1; i<=len; i++) {
        res[`_${i}`] = allCalcResults[len-i]
    }

    setAllVars(res)
    return res
}

export default _interpret_calc