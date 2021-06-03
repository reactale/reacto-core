import { _findAndProcessReactos } from '../dist/transpiled-ts-js/modules/processor'

describe("TEST CALC (CALC) MODULE", () => {

    test("Addition of 2 numbers", () => {
        const rTxt = "((r.calc. 4 + 5))"
        expect(_findAndProcessReactos(rTxt)).toBe('9')
    })


    test("Subtraction of 2 numbers", () => {
        const rTxt = "((r.calc. 4 - 5))"
        expect(_findAndProcessReactos(rTxt)).toBe('-1')
    })


    test("Multiplication of 2 numbers", () => {
        const rTxt = "((r.calc. 4 * 5))"
        expect(_findAndProcessReactos(rTxt)).toBe('20')
    })


    test("Division of 2 numbers", () => {
        const rTxt = "((r.calc. 27 / 3))"
        expect(_findAndProcessReactos(rTxt)).toBe('9')
    })


    test("Addition of a number with a r.var", () => {
        const rTxt = "((r.var.n = 5))((r.calc. 4 + r.var.n ))"
        expect(_findAndProcessReactos(rTxt)).toBe('9')
    })


    test("Subtraction of a number with a r.var", () => {
        const rTxt = "((r.var.n = 5))((r.calc. 4 - r.var.n ))"
        expect(_findAndProcessReactos(rTxt)).toBe('-1')
    })


    test("Multiplication of a number with a r.var", () => {
        const rTxt = "((r.var.n = 5))((r.calc. 4 * r.var.n ))"
        expect(_findAndProcessReactos(rTxt)).toBe('20')
    })


    test("Division of a number with a r.var", () => {
        const rTxt = "((r.var.n = 30))((r.calc. r.var.n / 10 ))"
        expect(_findAndProcessReactos(rTxt)).toBe('3')
    })


    test("Addition of 2 r.vars", () => {
        const rTxt = "((r.var.n1 = 30))((r.var.n2 = 3))((r.calc. r.var.n1 + r.var.n2 ))"
        expect(_findAndProcessReactos(rTxt)).toBe('33')
    })


    test("Subtraction of 2 r.vars", () => {
        const rTxt = "((r.var.n1 = 30))((r.var.n2 = 3))((r.calc. r.var.n1 - r.var.n2 ))"
        expect(_findAndProcessReactos(rTxt)).toBe('27')
    })


    test("Multiplication of 2 r.vars", () => {
        const rTxt = "((r.var.n1 = 30))((r.var.n2 = 3))((r.calc. r.var.n1 * r.var.n2 ))"
        expect(_findAndProcessReactos(rTxt)).toBe('90')
    })

    
    test("Division of 2 r.vars", () => {
        const rTxt = "((r.var.n1 = 30))((r.var.n2 = 3))((r.calc. r.var.n1 / r.var.n2 ))"
        expect(_findAndProcessReactos(rTxt)).toBe('10')
    })
})