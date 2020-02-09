import {
    _prepValForMaths,
    _eatUnwantedNL,
    _startsWith
} from '../src/modules/util'

test('test _startsWith truthy 1: ', () => {
    expect(_startsWith("Superman", "Sup")).toBe(true)
})

test('test _startsWith falsy 1: ', () => {
    expect(_startsWith("Superman", "ASup")).toBe(false)
})