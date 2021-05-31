/*
* /\(\(r\.(.)*?\)\)/gs
*
* This regex matches anything that starts with "((r."
* And ends with "))"
* It can go multiline
* It can contain single "(" and ")"
* It can contain "( (", i.e. double ( with space in between
* 
* This function receives entire rTxt
* It will go thru all ((r.eacto)) one by one
* and send for processing
*
*/
import { _interpret } from './interpreters/index'
import { VAR_IS_PRINT_OFF } from './constants'
import { _getVar } from './interpreters/var'

function _findAndProcessReactos (rTxt: string) {
    var nTxt = rTxt.replace(/\(\(r\.(.)*?\)\)/gs, function(rToken) {
        var val = _interpret(rToken);

        if(_getVar(VAR_IS_PRINT_OFF) === 'YES') {
            return ''
        }
        // 0 and '0' are valid, so let them be
        else if (val === '0' || val === 0) {
            return val;
        }
        else {
            return val || '';
        }
    });

    return nTxt.trim();
}

export { _findAndProcessReactos }