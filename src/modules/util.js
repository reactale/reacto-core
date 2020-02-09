import { _interpret } from './interpreters'

export { 
    _prepValForMaths, 
    _eatUnwantedNL,
    _startsWith
}

/**
 * It will check if given token is a Reacto, if yes 
 * then convert it to a proper value with proper dataType
 */
function _prepValForMaths(tok) {
    let v = _interpret (tok, true);
    if (!isNaN(v)) {
        v = Number(v);
    }
    return v;
}

/*
* If a line ends with \
* i.e. a "\" immediately followed by "\n" (enter)
* Then eat that newline up...
*/
function _eatUnwantedNL(txt) {
    //console.log("before="); console.log(txt);
    //return txt.replace(/\\[ \r]*\n/g, '').trim();
    txt = txt.replace(/\\(\r\n|\r|\n)/g, '').trim();

    //sometimes due to excessive trimming at each phase, 
    // the last "\" can be left alone without a "\n" to have it removed
    // hence remove any trailing left-alone "\"
    if (txt[txt.length - 1] === "\\") {
        txt = txt.substr(0, txt.length - 1);
    }

    //console.log("after="); console.log(txt);
    return txt;
}

function _startsWith (str, part) {
    return str.substr(0, part.length) === part;
}

