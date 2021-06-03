import {
    _prepValForMaths,
    _eatUnwantedNL,
    _startsWith
} from '../dist/transpiled-ts-js/modules/services/util'

describe("TESTING UTIL.JS", () => {

    test('_eatUnwantedNL: replaces newlines with single space', () => {
        // Beware of unwanted IDE introduced WhiteSpaces
        // also add two \\ otherwise it will by default escape the newline
        // such escaping will not work when readin from file as text
        let multilineString = `Superman\\
Batman\\
Iron Man`

        let result = _eatUnwantedNL(multilineString)
        let expectedResult = "SupermanBatmanIron Man"

        expect(result).toBe(expectedResult)
    })

    test('_eatUnwantedNL: removes consecutive newlines', () => {
        // Beware of unwanted IDE introduced WhiteSpaces
        let multilineString = `\\
Superman\\
\\
\\
Batman\\
\\
Iron Man\\
\\`

        let result = _eatUnwantedNL(multilineString)
        let expectedResult = "SupermanBatmanIron Man"

        expect(result).toBe(expectedResult)
    })

    test('_eatUnwantedNL: preserve spaces before newlines', () => {
        // Beware of unwanted IDE introduced WhiteSpaces
        let multilineString = `Superman  \\
Batman   \\
Iron Man`

        let result = _eatUnwantedNL(multilineString)
        let expectedResult = "Superman  Batman   Iron Man"  // 2 spaces, then 3 spaces

        expect(result).toBe(expectedResult)
    })

    

    test('_startsWith: truthy test', () => {
        expect(_startsWith("Superman", "Sup")).toBe(true)
    })

    test('_startsWith: falsy test', () => {
        expect(_startsWith("Superman", "ASup")).toBe(false)
    })

    test('_startsWith: blank test', () => {
        expect(_startsWith("Superman", "")).toBe(false)
        expect(_startsWith("", "Superman")).toBe(false)
        expect(_startsWith("", "")).toBe(false)
    })
})
