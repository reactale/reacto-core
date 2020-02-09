/**
 * Users can set and get variables
 * Structures:
 * (r.var.k1)   // to get a value
 * (r.var.k1=v1)    // to set a value
 * (r.var.k1=r.dt.date)    // to set a value from a reacto itself
 * 
 * Since "_interpret" has already stripped "var.", here we will get either of
 * key          (for a get)
 * key=value    (for a set)
 * @param {String} token 
 */

import { _startsWith } from '../util'
import { _interpret } from './index'

/*
 To store all user defined reacto-variable
 declared using ((r.var.varName = varValue))
*/
let _privateVars = {}

export const _setVar = (k, v) => _privateVars[k] = v

// Fail silently, but ensure 0 is NOT FALSE by changing it to String
export const _getVar = k => (typeof(_privateVars[k]) !== 'undefined') ?  _privateVars[k].toString() : ''

export const _resetVars = () => _privateVars = {}

export const _getAll = () => ({..._privateVars})

export const _interpret_var = token => {
    // if a SET call
    if (token.indexOf("=") > -1) {
        var parts = token.split("=");
        var key = parts[0].trim();
        var val = parts[1].trim();
        // check if the value is a reacto itself :P
        // ((r.var.thisYear = r.dt.year))

        val = _startsWith(val, "r.") ? _interpret(val, true) : val;

        _setVar(key, val);
    }

    // Else a GET call
    // Caution, if the value was previously set by reacto, then it may need to process by LangTranlate
    else {
        return _getVar(token.toString().trim());
    }
}

