import { _interpret } from '../interpreters';
export { _prepValForMaths, _eatUnwantedNL, _startsWith };
/**
 * It will check if given token is a Reacto, if yes
 * then convert it to a number for maths
 */
function _prepValForMaths(tok) {
    let v = _interpret(tok, true);
    // @ts-ignore
    if (!isNaN(v)) {
        return Number(v);
    }
    // @ts-ignore
    return v;
}
/*
* If a line ends with \
* i.e. a "\" immediately followed by "\n" (enter)
* Then eat that newline up...
*/
function _eatUnwantedNL(txt) {
    //console.log("before="); console.log(txt);
    // txt = txt.replace(/(\s+|)\\(\r\n|\r|\n)/g, ' ').trim();  // eat spaces also
    txt = txt.replace(/\\(\r\n|\r|\n)/g, '').trim();
    //sometimes due to excessive trimming at each phase, 
    // the last "\" can be left alone without a "\n" to have it removed
    // hence remove any trailing left-alone "\"
    while (txt[txt.length - 1] === "\\") {
        txt = txt.substr(0, txt.length - 1);
    }
    //console.log("after="); console.log(txt);
    return txt;
}
function _startsWith(str, part) {
    if (!str || !part)
        return false;
    return str.substr(0, part.length) === part;
}
//# sourceMappingURL=util.js.map