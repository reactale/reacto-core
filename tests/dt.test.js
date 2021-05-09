import { _findAndProcessReactos } from '../src/modules/processor'

describe("TEST DATE-TIME (DT) MODULE", () => {

    test("Test ((r.dt.date))", () => {
        const rTxt = "((r.dt.date))"
        const result = (new Date()).getDate()

        expect(_findAndProcessReactos(rTxt)).toBe(result)
    })

})