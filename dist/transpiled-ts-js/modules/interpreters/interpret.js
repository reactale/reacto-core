/**
 * This function will receive, presumably, a reacto
 * and it should look like either r.class.property OR ((r.class.property))
 * For Language Translation Prepending with "r$$_" is necessary, LTP in short
 * skipTranslation is False by default
 * forward skipTranslation to the Reacto Interpreters which returns a value (a number or a string)
 */
import { _interpret_blk, _interpret_calc, _interpret_cfg, _interpret_dt, _interpret_fn, _interpret_if, _interpret_var } from './index';
import { _startsWith } from '../services/util';
import { getPrevReacto, setPrevReacto } from '../services/system';
function _interpret(aReacto, skipTranslation = false) {
    skipTranslation = skipTranslation || false;
    //let ifReacto = false;
    let interpretedTxt = "";
    let tok = aReacto.trim();
    // If Not a valid reacto, just return
    if (!_startsWith(tok, "((r.") && !_startsWith(tok, "r.")) {
        return tok;
    }
    // if in form ((r.class.property))
    else if (_startsWith(tok, "((r.")) {
        tok = tok.substring(4, (tok.length - 2));
    }
    // else remove the "r." from the begining
    else {
        tok = tok.substr(2);
    }
    ///////////////////////////////////////
    // If prev reacto was a conditional (if)
    // which resulted in false
    // then this reacto should not be evaluated 
    // and the prev reacto should be resetted
    const shouldSkipped = (thisReactoType) => {
        const shouldReturn = thisReactoType !== 'if'
            && thisReactoType !== '_block'
            && getPrevReacto().name === 'if'
            && getPrevReacto().data === false;
        // save a blank
        // because this reacto will be skipped
        if (shouldReturn) {
            setPrevReacto({ name: '_skipped' + thisReactoType });
        }
        return shouldReturn;
    };
    // Now create the reducer staircase
    if (_startsWith(tok, "dt.")) {
        if (shouldSkipped('dt'))
            return '';
        interpretedTxt = _interpret_dt(tok.substr(3), skipTranslation); //remove "dt." and send for interpretation"
        setPrevReacto({ name: 'dt' });
    }
    // if it is a Config Reacto i.e. it looks like (r.cfg.key.value)
    else if (_startsWith(tok, "cfg.")) {
        if (shouldSkipped('cfg'))
            return '';
        interpretedTxt = _interpret_cfg(tok.substr(4)); //remove "cfg." and send for interpretation"
        setPrevReacto({ name: 'cfg' });
    }
    // if it is a Var Reacto i.e. it looks like (r.var.key1)
    else if (_startsWith(tok, "var.")) {
        if (shouldSkipped('var'))
            return '';
        interpretedTxt = _interpret_var(tok.substr(4)); //remove "var." and send for interpretation"
        setPrevReacto({ name: 'var' });
    }
    // if it is a Calc Reacto i.e. it looks like ((r.calc. n1 OP n2))
    else if (_startsWith(tok, "calc.")) {
        if (shouldSkipped('calc'))
            return '';
        interpretedTxt = _interpret_calc(tok.substr(5), skipTranslation); //remove "var." and send for interpretation"
        setPrevReacto({ name: 'calc' });
    }
    // if it a Conditional IF statement, WOW
    else if (_startsWith(tok, "if.")) {
        if (shouldSkipped('if'))
            return '';
        interpretedTxt = _interpret_if(tok.substr(3)); //remove "if." and send for interpretation"
    }
    // if it is a Functional Reacto,
    else if (_startsWith(tok, "fn.")) {
        if (shouldSkipped('fn'))
            return '';
        interpretedTxt = _interpret_fn(tok.substr(3)); //remove "fn." and send for interpretation"
        setPrevReacto({ name: 'fn' });
    }
    // if it is an internal Block Reacto
    // ((r._block.ID))
    else if (_startsWith(tok, "_block.")) {
        if (shouldSkipped('_block'))
            return '';
        interpretedTxt = _interpret_blk(tok.substr(7)); //remove "_block." and send for interpretation"
        setPrevReacto({ name: '_block' });
    }
    // No Valid Class Found 
    // i.e. ((r.SOME_INVALID_CLASS))
    else {
        interpretedTxt = '';
    }
    return interpretedTxt;
}
export default _interpret;
//# sourceMappingURL=interpret.js.map