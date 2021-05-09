/**
 * All Reactos, that start with "cfg." should come here for interpretation
 * These are Configuration Reactos, like (r.cfg.langSwitch.beng) or (r.cfg.langSwitch.en) etc
 * For the purpose of "$$" see explanation above of function _interpret
 * @param {String} token 
 */
import { _startsWith } from '../util'
import { _setCurrentLang } from '../lang'
import { setCurrentLocale } from '../locale'

function _interpret_cfg (token) {
    // (r.cfg.langSwitch.en) => Changes rto.currentLang

    // DEPRECATED
    if (_startsWith(token, 'langSwitch')) {
        var langCode = token.replace('langSwitch.', '').trim();     // remove 'langSwitch.'
        _setCurrentLang(langCode);
    }
    else if (_startsWith(token, 'setLocale')) {
        var langCode = token.replace('setLocale.', '').trim();     // remove 'setLocale.'
        setCurrentLocale(langCode);
    }

    return '';
}

export default _interpret_cfg