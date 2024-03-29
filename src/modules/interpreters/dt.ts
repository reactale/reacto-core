/**
 * All Reactos, that start with "dt." should come here for interpretation
 * These are DateTime Reactos, 
 * For skipTranslation = Skip Language Translation Process
 * @param {String} rToken 
 */

 // @ts-ignore
import { days, months } from '../services/constants'
import { getCurrentLocale } from '../services/locale'


export const _interpret_dt = (rToken: string, skipTranslation: boolean) => {
    let newTxt = '';
    let d = new Date();
    const dnow = Date.now()
    const locale = skipTranslation ? 'en' : getCurrentLocale()
    switch (rToken) {
        // Reacto = ((r.dt.year))
        case "year":
            // newTxt = d.getFullYear();
            return new Intl.DateTimeFormat(locale, { year: "numeric" }).format(dnow)

        // (r.dt.date)
        case "date":
            // newTxt = d.getDate();
            return new Intl.DateTimeFormat(locale, { day: "numeric" }).format(dnow)

        // ((r.dt.hour))
        // 12 at night should be shown as 12, not 0
        case "hour":
            // newTxt = ((d.getHours() > 12 ? (d.getHours() - 12) : d.getHours()) || 12);
            // @ts-ignore
            return new Intl.DateTimeFormat(locale, { hour: "numeric", hourCycle: "h12" }).format(dnow)

        // ((r.dt.hour24))
        case "hour24":
            // @ts-ignore
            return new Intl.DateTimeFormat(locale, { hour: "numeric", hourCycle: "h23" }).format(dnow)

        // ((r.dt.min))
        case "min":
            return new Intl.DateTimeFormat(locale, { minute: "numeric" }).format(dnow)

        // ((r.dt.sec))
        case "sec":
            return new Intl.DateTimeFormat(locale, { second: "numeric" }).format(dnow)

        // ((r.dt.day))
        case "day":
            // newTxt = days[d.getDay()];
            return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(dnow)

        // ((r.dt.month))
        case "month":
            return new Intl.DateTimeFormat(locale, { month: "long" }).format(dnow)
    }

    return newTxt;
}