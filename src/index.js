/*
    Project: Reactive Tokens (reactos)
    Author: Suman Barick
    
    Definition:
    All the reactos wil have the structure ((r.namespace.fn))

    /\(\(r\.(.|\n)*?\)\)/g

    This regex matches anything that starts with "((r."
    And ends with "))"
    It can go multiline
    It can contain single "(" and ")"
    It can contain "( (", i.e. double ( with space in between
*/
const version = '1.0.9';
import { _preReplaceBlocks } from './modules/blocks';
import { _findAndProcessReactos } from './modules/processor';
import { _eatUnwantedNL } from './modules/util';
import { addFn, getFnList } from './modules/interpreters/fn';
import { getAllVars, setAllVars, resetVars } from './modules/interpreters/var';
import { getLocales, numToLocale } from './modules/locale';
/*
* Input: Text with reactos
* Output: Text will all the reactos resolved
* This function will go thru all the RTOs and process them one by one
* And replace them in the new string
*/
function process(txt) {
    return _startProcessing(txt);
}
function _startProcessing(rTxt) {
    let nTxt = _preReplaceBlocks(rTxt);
    nTxt = _findAndProcessReactos(nTxt);
    nTxt = _eatUnwantedNL(nTxt);
    return nTxt;
}
// @ts-ignore
window.rto = {
    getVersion: () => version,
    process,
    addFn,
    getFnList,
    getAllVars,
    setAllVars,
    resetVars,
    getLocales,
    numToLocale
};
//# sourceMappingURL=index.js.map