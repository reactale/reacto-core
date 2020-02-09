/**
 * All Reactos, that start with "cfg." should come here for interpretation
 * These are Configuration Reactos, like (r.cfg.langSwitch.beng) or (r.cfg.langSwitch.en) etc
 * For the purpose of "$$" see explanation above of function _interpret
 * @param {String} token 
 */
import { _startsWith } from '../util'
import { _setCurrentLang } from '../lang'

function _interpret_cfg (token) {
    // (r.cfg.langSwitch.en) => Changes rto.currentLang
    if (_startsWith(token, 'langSwitch')) {
        var langCode = token.replace('langSwitch.', '').trim();     // remove 'langSwitch.'
        _setCurrentLang(langCode);
    }

    return '';
}

export default _interpret_cfg