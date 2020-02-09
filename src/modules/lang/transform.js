import { getCurrentLangDef } from './index'
/**
 * Anything starting with _r$$_ should be Translatable
 * @param {*} rTxt 
 */
function _langTranform(rTxt) {
    if (!rTxt || !rTxt.trim()) { return rTxt; }
    var transformedTxt = '';
    transformedTxt = rTxt.replace(/_r\$\$_[a-zA-Z0-9]{1,}/g, function (r) {
        return getCurrentLangDef()[r.substr(5)] || r.substr(5);
    });
    return transformedTxt;
}

export default _langTranform