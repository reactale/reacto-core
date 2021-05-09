/*
* ((r.fn.fnName))
* ((r.fn.fnName ,, param1 ,, param2 ))  // pass params separated with Double Comma
* This function interprets Function reactos
* And call the functions
*/

// fns will hold all the declared functions
// that can be excuted using ((r.fn.fnName)) 
let fns: { [fnName: string]: Function } = {}

export const addFn = (fnName: string, fn: Function) => fns[fnName] = fn
export const getFn = (fnName: string) => fns[fnName]
export const getFnList = () => Object.keys(fns)

/**
 * Interpret / run a stored function
 * 
 * Pass ((r.fn.fnName ,, param1, param2 )) 
 * after stripping the the initial `((r.fn.`
 * @param fnData | fnName ,, param1 ,, param2
 */
export const _interpret_fn = (fnData: string): any => {
    let res = '';
    let fnName = fnData.trim();
    let params: Array<any> = [];

    // If there are params
    // Then seprate the Fn and The params
    if (fnData.indexOf(',,') >= 0) {
        let parts = fnData.split(',,');
        fnName = parts[0].trim();
        params = parts.slice(1).map(v => v.trim());
    }

    if (fns[fnName] && typeof (fns[fnName]) === "function") {
        res = fns[fnName].apply(window, params);
    }

    return res;
}
