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
import { _interpret } from './interpreters/index';
import { isPrintOff } from './services/system';
function _findAndProcessReactos(rTxt) {
    let nTxt = rTxt.replace(/\(\(r\.(.)*?\)\)/gs, function (rToken) {
        let val = '';
        // TRY CATCH, IF REACTO INTERPRETER FAILS
        // FOR ANY OF THE REACTOS
        try {
            val = _interpret(rToken);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            // Whatever it is, the final output must be a string
            // Check undefined, because some reactos r.if. doesnot return anything
            if (typeof (val) === 'undefined')
                val = '';
            val = val.toString();
        }
        if (isPrintOff()) {
            val = '';
        }
        return val;
    });
    // return nTxt.trim();  // Don't trim the overall text i.e. not reacto
    return nTxt;
}
export { _findAndProcessReactos };
//# sourceMappingURL=processor.js.map