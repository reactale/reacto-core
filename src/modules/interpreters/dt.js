/**
 * All Reactos, that start with "dt." should come here for interpretation
 * These are DateTime Reactos, 
 * For Language Translation Prepending with "_r$$_" is necessary, LTP in short
 * @param {String} rToken 
 */

import { days, months } from '../constants'

const _interpret_dt = (rToken, skipLTP) => {
    let newTxt;
    let d = new Date();

    switch (rToken) {
        // Reacto = (r.dt.year)
        case "year":
            newTxt = d.getFullYear();
            break;

        // (r.dt.date)
        case "date":
            newTxt = d.getDate();
            break;

        // (r.dt.hour)
        // 12 at night should be shown as 12, not 0
        case "hour":
            newTxt = ((d.getHours() > 12 ? (d.getHours() - 12) : d.getHours()) || 12);
            break;

        // (r.dt.hour24)
        case "hour24":
            newTxt = d.getHours();
            break;

        // (r.dt.min)
        case "min":
            newTxt = d.getMinutes();
            break;

        // (r.dt.sec)
        case "sec":
            newTxt = d.getSeconds();
            break;

        // (r.dt.day)
        case "day":
            newTxt = days[d.getDay()];
            break;

        // (r.dt.month)
        case "month":
            newTxt = months[d.getMonth()];
            break;
    }

    if (!skipLTP) {
        if (newTxt === '') {
            // do nothing
        }
        else if (isNaN(newTxt)) {
            newTxt = '_r$$_' + newTxt;
        }
        else {
            newTxt = '_r$$_' + newTxt.toString().split('').join('_r$$_');
        }
    }

    return newTxt;
}

export default _interpret_dt