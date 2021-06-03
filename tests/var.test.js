import { _setVar, _interpret_var, resetVars } from '../dist/transpiled-ts-js/modules/interpreters/var'

describe("TEST VAR MODULE", () => {

    test('Set, get and reset a r.var', () => {
        let key = 'hero'
        let value = 'Superman'
        _setVar(key, value)
        let heroname = _interpret_var(key)
        expect(heroname).toBe(value)

        // resetting the value
        resetVars()
        heroname = _interpret_var(key)
        expect(heroname).toBe('')
    })

    test('Interpolation of r.var inside another r.var', () => {

        // Save a reacto var with
        // one or more r.var inside
        let sentence = 'The true identity of r.var.hero is r.var.name'
        _setVar('sentence', sentence)

        // Now save the internal vars
        _setVar('hero', 'Superman')
        _setVar('name', 'Clark Kent')

        // Test if it's working
        expect(_interpret_var('sentence')).toBe('The true identity of Superman is Clark Kent')

        // Test 2
        // to check if it is real time
        // Change the values of internal r.var
        _setVar('hero', 'Flash')
        _setVar('name', 'Barry Allen')

        // Test if it's working
        expect(_interpret_var('sentence')).toBe('The true identity of Flash is Barry Allen')
    })

})