import { process } from '../dist/transpiled-ts-js'

describe("TEST CONDITIONAL (IF) MODULE", () => {

    test("Equality (=) ", () => {
        let rTxt = "((r.if. 4 = 4 )){{ will show    }}"
        expect(process(rTxt)).toBe(' will show    ')    // Space preserved

        rTxt = "((r.if. 4 = 5 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Equality (=) of Strings ", () => {
        let rTxt = "((r.if. I am a boy = I am a boy   )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. I am a boy = I am a girl )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Inequality (=) of Strings ", () => {
        let rTxt = "((r.if. I am a boy != I am a girl   )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. I am a boy != I am a boy )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Inequality (!=) ", () => {
        let rTxt = "((r.if. 4 != 5 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 4 != 4 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Greater than (>) ", () => {
        let rTxt = "((r.if. 4 > 3 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 4 > 4 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Less than (<) ", () => {
        let rTxt = "((r.if. 4 < 9 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 4 < 3 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Greater Equals (>=) ", () => {
        let rTxt = "((r.if. 9 >= 5 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 9 >= 9 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 9 >= 100 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Lesser Equals (>=) ", () => {
        let rTxt = "((r.if. 9 <= 15 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 9 <= 9 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.if. 9 <= 6 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })

    test("Using r.vars", () => {
        let rTxt = "((r.var.n1 = 9))((r.var.n2 = 15))((r.if. r.var.n1 <= r.var.n2 )){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        rTxt = "((r.var.n1 = 9))((r.var.n2 = 15))((r.if. r.var.n1 > r.var.n2 )){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })


    test("Chaining with AND", () => {

        // both true
        let rTxt = "((r.if. 100 > 50))((r.if.and. 200 > 150)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // 1st one true, 2nd false
        rTxt = "((r.if. 100 > 50))((r.if.and. 200 < 150)){{ won't show }}"
        expect(process(rTxt)).toBe('')

        // 1st one false, 2nd true
        rTxt = "((r.if. 100 < 50))((r.if.and. 200 > 150)){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })


    test("Chaining with OR", () => {
        
        // both true
        let rTxt = "((r.if. 100 > 50))((r.if.or. 200 > 150)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // Only 1st one true
        rTxt = "((r.if. 100 > 50))((r.if.or. 200 < 150)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // Only 2nd one true
        rTxt = "((r.if. 100 < 50))((r.if.or. 200 > 150)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // Only one true in a long chain
        rTxt = "((r.if. 1 < 1))((r.if.or. 1 > 1))((r.if.or. 1 = 1))((r.if.or. 1 != 1)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // both false
        rTxt = "((r.if. 100 < 50))((r.if.and. 200 < 150)){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })


    test("Chaining AND with OR", () => {
        
        // The execution goes from left to right with ANDing or ORing current one
        // with the preious result

        // false OR true AND true
        let rTxt = "((r.if. 1 > 1))((r.if.or. 2 > 1))((r.if.and. 3 > 1)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // true AND false OR true
        rTxt = "((r.if. 2 > 1))((r.if.and. 1 > 2))((r.if.or. 3 > 1)){{ will show }}"
        expect(process(rTxt)).toBe(' will show ')

        // true OR true AND false
        rTxt = "((r.if. 2 > 1))((r.if.or. 3 > 2))((r.if.and. 3 > 7)){{ won't show }}"
        expect(process(rTxt)).toBe('')

        // true AND false OR false
        rTxt = "((r.if. 2 > 1))((r.if.and. 1 > 2))((r.if.or. 3 > 7)){{ won't show }}"
        expect(process(rTxt)).toBe('')
    })



})