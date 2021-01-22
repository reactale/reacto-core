/*
* ((r.fn.fnName))
* ((r.fn.fnName __ param1 __ param2 ))  // pass params separated with Double underscore
* This function interprets Function reactos
* And call the functions
*/

// fns will hold all the declared functions
// that can be excuted using ((r.fn.fnName)) 
let fns = {}

export const addFn = (fn, fnName) => fns[fnName] = fn
export const getFn = fnName => fns[fnName]
export const getFnList = () => Object.keys(fns)

export const _interpret_fn = fnData => {
    let res = '';
    let fnName = fnData.trim();
    let params = [];

    // If there are params
    // Then seprate the Fn and The params
    if (fnData.indexOf('__') >= 0) {
        let parts = fnData.split('__');
        fnName = parts[0].trim();
        params = parts.slice(1).map(v => v.trim());
    }

    if (fns[fnName] && typeof (fns[fnName]) === "function") {
        res = fns[fnName].apply(window, params);
    }

    return res;
}

