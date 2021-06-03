/**
 * All Reactos, that start with "cfg." should come here for interpretation
 * These are Configuration Reactos, like (r.cfg.setLocale.bn) or (r.cfg.setLocale.en) etc
 * For the purpose of "$$" see explanation above of function _interpret
 * @param {String} token 
 */
import { _startsWith } from '../services/util'
import { setCurrentLocale } from '../services/locale'
import { setPrintOff } from '../services/system'

function _interpret_cfg (token: string): string {
    // (r.cfg.setLocale.en) => Changes rto.currentLang
    if (_startsWith(token, 'setLocale')) {
        var langCode = token.replace('setLocale.', '').trim();     // remove 'setLocale.'
        setCurrentLocale(langCode);
    }
    else if (token === 'printOff') {
        setPrintOff(true)
    }
    else if (token === 'printOn') {
        setPrintOff(false)
    }
    return '';
}

export default _interpret_cfg