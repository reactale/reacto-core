import * as langDefs from '../src/modules/lang/defs'
import {
    getLangs,
    _getAllNames,
    _getAllCodes,
    _getCurrentLang,
    _setCurrentLang,
    getDef,
    getCurrentLangDef
}
from '../src/modules/lang'

describe("TEST LANG MODULE", () => {

    test('Number of available languages should match the number of available language definitions', () => {
        let numberOfLangDefs = Object.keys(langDefs).length
        let numberOfAvlbleLangs = getLangs().length
        expect(numberOfLangDefs).toBe(numberOfAvlbleLangs)
    })

    test('Count of available language names an codes should be same', () => {
        expect(_getAllNames().length).toBe(_getAllCodes().length)
    })

    test('Default current language should be English', () => {
        expect(_getCurrentLang()).toBe('en')
    })

    test('Test getting and setting of current language', () => {
        let langCode = 'beng'       // for Bengali
        _setCurrentLang(langCode)
        expect(_getCurrentLang()).toBe(langCode)

        langCode = 'or'     // for Oriya
        _setCurrentLang(langCode)
        expect(_getCurrentLang()).toBe(langCode)
    })

    test('Attempt to set current language to an unavalaible language should fallback to English', () => {
        let langCode = 'xyz'       // Any Unknown Lang Code
        _setCurrentLang(langCode)
        expect(_getCurrentLang()).toBe('en')  // Default is English i.e. 'en
    })

    test('getDef should return the correct language definition object', () => {
        // test for English
        expect(getDef('en').thu).toBe('Thursday')
        expect(getDef('en').sep).toBe('September')

        // test for Bengali
        expect(getDef('beng').tue).toBe('মঙ্গলবার')
        expect(getDef('beng').apr).toBe('এপ্রিল')
    })

    test('getCurrentLangDef should return the current language definition object', () => {
        let langCode = 'hind'       // for Hindi
        _setCurrentLang(langCode)
        expect(getCurrentLangDef().sun).toBe('रविवार')
        expect(getCurrentLangDef().dec).toBe('दिसंबर')
    })

})