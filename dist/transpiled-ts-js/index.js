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
const { VERSION } = require('./info');
import { _preReplaceBlocks } from './modules/interpreters/blocks';
import { _findAndProcessReactos } from './modules/processor';
import { _eatUnwantedNL } from './modules/services/util';
import { addFn, getFnList } from './modules/interpreters/fn';
import { getAllVars, setAllVars, resetVars } from './modules/interpreters/var';
import { getLocales, numToLocale } from './modules/services/locale';
/*
* Input: Text with reactos
* Output: Text will all the reactos resolved
* This function will go thru all the RTOs and process them one by one
* And replace them in the new string
*/
export const process = (txt) => {
    return _startProcessing(txt);
};
function _startProcessing(rTxt) {
    let nTxt = _preReplaceBlocks(rTxt);
    nTxt = _findAndProcessReactos(nTxt);
    nTxt = _eatUnwantedNL(nTxt);
    return nTxt;
}
// @ts-ignore
window.rto = {
    getVersion: () => VERSION,
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