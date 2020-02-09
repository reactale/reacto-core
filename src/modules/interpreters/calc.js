import { _prepValForMaths } from '../util'
/*
    * This function will do basic 4 maths opearion i.e. + - * /
    * ((r.calc. n1 OP n2))
    * n1 and n2 can be any number or reacto
    * OP is anyone of + - * /
    * since "((r.calc." and "))" has been stripped from begining and end, here we will only get the following
    * n1 OP n2
*/
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

export default _interpret_calc