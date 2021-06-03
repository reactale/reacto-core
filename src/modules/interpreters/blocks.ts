import { _findAndProcessReactos } from '../processor'
import { getPrevReacto } from '../services/system'
/*
* This variable will store all {{ ... }} blocks
* with key being some id
* value being this block
*/
let _rBlocks: { [blockID: string]: string } = {}

export {
    _preReplaceBlocks,
    _interpret_blk
}

/*
* All "{{ ... }}" blocks will be replaced with 
* ((r._block.ID)) reactos
* 
* These internal ((r._block.ID)) reacto blocks will be processed later
*/
function _preReplaceBlocks (rTxt: string) {
    _rBlocks = {};
    var blockCount = 0;
    var nTxt = rTxt.replace(/{{(.|\n)*?}}/g, function(rBlock) {
        var ID = ++blockCount;
        _rBlocks[ID] = rBlock;
        return "((r._block." + ID + "))";
    });
    return nTxt;
}

/*
* This function receives a BlockID
* Gets corressponding block from 
*/
function _interpret_blk (blockID: string) {
    let prevReacto = getPrevReacto()
    let block = ''

    // Block will be executed IF
    // Either prev reacto was not a condition
    // OR
    // IF it was a conditional, resulted in true
    if(prevReacto.name !== 'if' || (prevReacto.name === 'if' && prevReacto.data === true)) {
        block = _rBlocks[blockID];
        block = block.substring(2, block.length - 2); //remove starting "{{" and ending "}}"
        block = _findAndProcessReactos(block);
    }
    
    delete _rBlocks[blockID];   // free the memory
    return block;
}