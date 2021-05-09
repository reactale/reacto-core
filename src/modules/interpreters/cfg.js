/**
 * All Reactos, that start with "cfg." should come here for interpretation
 * These are Configuration Reactos, like (r.cfg.setLocale.bn) or (r.cfg.setLocale.en) etc
 * For the purpose of "$$" see explanation above of function _interpret
 * @param {String} token 
 */
import { _startsWith } from '../util'
import { setCurrentLocale } from '../locale'

function _interpret_cfg (token) {
    // (r.cfg.setLocale.en) => Changes rto.currentLang
    if (_startsWith(token, 'setLocale')) {
        var langCode = token.replace('setLocale.', '').trim();     // remove 'setLocale.'
        setCurrentLocale(langCode);
    }

    return '';
}

export default _interpret_cfg