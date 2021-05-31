/**
 * All Reactos, that start with "cfg." should come here for interpretation
 * These are Configuration Reactos, like (r.cfg.setLocale.bn) or (r.cfg.setLocale.en) etc
 * For the purpose of "$$" see explanation above of function _interpret
 * @param {String} token 
 */
import { _startsWith } from '../util'
import { setCurrentLocale } from '../locale'
import { _setVar } from './var'

import { VAR_IS_PRINT_OFF } from '../constants'

function _interpret_cfg (token) {
    // (r.cfg.setLocale.en) => Changes rto.currentLang
    if (_startsWith(token, 'setLocale')) {
        var langCode = token.replace('setLocale.', '').trim();     // remove 'setLocale.'
        setCurrentLocale(langCode);
    }
    else if (token === 'printOff') {
        _setVar(VAR_IS_PRINT_OFF, 'YES')
    }
    else if (token === 'printOn') {
        _setVar(VAR_IS_PRINT_OFF, 'NO')
    }
    return '';
}

export default _interpret_cfg