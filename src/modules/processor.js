/*
* /\(\(r\.(.|\n)*?\)\)/g
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
import { _interpret } from './interpreters'

function _findAndProcessReactos (rTxt) {
    var nTxt = rTxt.replace(/\(\(r\.(.|\n)*?\)\)/g, function(rToken) {
        var val = _interpret(rToken);

        // 0 and '0' are valid, so let them be
        if (val == '0') {
            return val;
        }
        else {
            return val || '';
        }
    });

    return nTxt.trim();
}

export { _findAndProcessReactos }