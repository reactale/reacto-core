import rto from '../dist/transpiled-ts-js'
const process = rto.process

describe("TEST DATE-TIME (DT) MODULE", () => {
    test("Test ((r.dt.year))", () => {
        const rTxt = "((r.dt.year))"
        const result = (new Date()).getFullYear().toString()

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.date))", () => {
        const rTxt = "((r.dt.date))"
        const result = (new Date()).getDate().toString()

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.hour))", () => {
        const rTxt = "((r.dt.hour))"
        const d = new Date()
        let result = ( d.getHours() > 12 ? `${(d.getHours() - 12)} PM` : `${(d.getHours() || 12)} AM` );
        result = d.getHours() === 0 ? '12 AM' : result
        result = d.getHours() === 12 ? '12 PM' : result
        expect(process(rTxt)).toBe(result)
    })
    
    test("Test ((r.dt.hour24))", () => {
        const rTxt = "((r.dt.hour24))"
        const result = (new Date()).getHours()

        expect(parseInt(process(rTxt))).toBe(result)
    })

    test("Test ((r.dt.min))", () => {
        const rTxt = "((r.dt.min))"
        const result = (new Date()).getMinutes().toString()

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.sec))", () => {
        const rTxt = "((r.dt.sec))"
        const result = (new Date()).getSeconds().toString()

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.day))", () => {
        const rTxt = "((r.dt.day))"
        const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const result = DAYS[(new Date()).getDay()]

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.month))", () => {
        const rTxt = "((r.dt.month))"
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const result = MONTHS[(new Date()).getMonth()]

        expect(process(rTxt)).toBe(result)
    })

    test("Test ((r.dt.day)) In Bengali", () => {
        const rTxt = "((r.cfg.setLocale.bn))((r.dt.day))"
        const DAYS = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
        const result = DAYS[(new Date()).getDay()]

        expect(process(rTxt)).toBe(result)
    })

    xtest("Test ((r.dt.month)) In Bengali", () => {
        const rTxt = "((r.cfg.setLocale.bn))((r.dt.month))"
        const MONTHS = ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']
        const result = MONTHS[(new Date()).getMonth()]

        expect(process(rTxt)).toBe(result)
    })

    // test was failing for "गुरुवार" and "गुरूवार"
    test("Test ((r.dt.day)) In Hindi", () => {
        const rTxt = "((r.cfg.setLocale.hi))((r.dt.day))"
        const DAYS = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
        
        const result = DAYS[(new Date()).getDay()]

        expect(process(rTxt)).toBe(result)
    })

    xtest("Test ((r.dt.month)) In Hindi", () => {
        const rTxt = "((r.cfg.setLocale.hi))((r.dt.month))"
        const MONTHS = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']
        const result = MONTHS[(new Date()).getMonth()]

        expect(process(rTxt)).toBe(result)
    })
})