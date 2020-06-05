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
    // txt = txt.replace(/(\s+|)\\(\r\n|\r|\n)/g, ' ').trim();
    txt = txt.replace(/\\(\r\n|\r|\n)/g, '').trim();
    
    // txt = txt.replace(/(\s+|)\\(\r\n|\r|\n)/g, t => {
    //     // if after trimming it is nothing, then it is just a blank newline
    //     console.log("t = (", t.trim() , ")")
    //     if(!t.trim()) return '' // return blank
    //     return ' '              // return 1 space only
    // })

    //sometimes due to excessive trimming at each phase, 
    // the last "\" can be left alone without a "\n" to have it removed
    // hence remove any trailing left-alone "\"
    while (txt[txt.length - 1] === "\\") {
        txt = txt.substr(0, txt.length - 1);
    }

    //console.log("after="); console.log(txt);
    return txt;
}

function _startsWith (str, part) {
    if (!str || !part) return false
    return str.substr(0, part.length) === part;
}

