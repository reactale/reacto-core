import rto from '../dist/transpiled-ts-js'
const process = rto.process

describe("TEST CONFIG (CFG) MODULE", () => {

    test("TURN OFF REACTO PRINTING", () => {
        const rTxt = "((r.cfg.printOff))((r.calc. 4 + 5))"
        expect(process(rTxt)).toBe('')
    })

    test("TURN ON REACTO PRINTING", () => {
        // to test it, first turn off printing, calculate something
        // then turn on printing and do the calc again
        // if the result is printed only once, 
        // Then test is successful

        // Scenario 1
        // Turn On first, because last test has turned it OFF


        let rTxt = "((r.cfg.printOn))((r.calc. 4 + 5))((r.calc. 4 + 5))"
        expect(process(rTxt)).toBe('99')


        // Now let's test print off and on
        // print OFF will suppress the 1st result
        // but then ON will show the 2nd result,
        // Hence only one 9 this time
        rTxt = "((r.cfg.printOff))((r.calc. 4 + 5))((r.cfg.printOn))((r.calc. 4 + 5))"
        expect(process(rTxt)).toBe('9')
    })

})