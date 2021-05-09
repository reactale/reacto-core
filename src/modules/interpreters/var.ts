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

type TKVPair = { [k:string]: string }

/*
 To store all user defined reacto-variable
 declared using ((r.var.varName = varValue))
*/
let _privateVars: TKVPair = {}

export const _setVar = (k: string, v: string) => _privateVars[k] = v

export const setAllVars = (kvPairs:TKVPair) => _privateVars = {..._privateVars, ...kvPairs}

// Fail silently, but ensure 0 is NOT FALSE by changing it to String
export const _getVar = (k: string) => (typeof(_privateVars[k]) !== 'undefined') ?  _privateVars[k].toString() : ''

export const resetVars = () => _privateVars = {}

export const getAllVars = () => ({..._privateVars})

/**
 * Interpret both get and set call.
 * Example of get call, ((r.var.varName))
 * Example of set call, ((r.var.varName = some text value of any length and may contain new line))
 * @param token | r
 */
export const _interpret_var = (token: string) => {
    // if a SET call
    if (token.indexOf("=") > -1) {
        var parts = token.split("=");
        var key = parts[0].trim();
        var val = parts[1].trim();

        // NOTE: check if the value is a reacto itself :P
        // ((r.var.thisYear = r.dt.year))
        val = _startsWith(val, "r.") ? _interpret(val, true) : val;

        _setVar(key, val);
    }

    // Else a GET call
    // Caution, if the value was previously set by reacto, then it may need to process by LangTranslate
    else {
        let value = _getVar(token.toString().trim());

        // Let's give 1 level of interpolation feature
        // that is,
        // if another r.var.var_name is embedded in this one,
        // then replace it with the real value 
        const R_VAR = 'r.var.'
        value = value.split(' ').map(v => {
            if(_startsWith(v, R_VAR)) {
                let realValue = _getVar(v.substr(R_VAR.length))
                if (typeof(realValue) !== 'undefined') v = realValue
            }

            return v
        }).join(' ')

        return value
    }
}

