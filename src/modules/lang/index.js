import * as langDefs from './defs'

let _currentLang = 'en';
let allNames = undefined
let allCodes = undefined

const _availableLangs = [
    { "name": "Bengali", "code": "beng" },
    { "name": "Hindi", "code": "hind" },
    { "name": "Oriya", "code": "or" },
    { "name": "Malayalam", "code": "mal" },
    { "name": "English", "code": "en" }
]

export const getLangs = () => [..._availableLangs]
export const _getAllNames = () => allNames || (allNames = _availableLangs.map(l => l.name))
export const _getAllCodes = () => allCodes || (allCodes = _availableLangs.map(l => l.code))
export const _getCurrentLang = () => _currentLang
export const _setCurrentLang = langCode => _currentLang = _getAllCodes().indexOf(langCode) > -1 ? langCode : 'en'

export const getDef = langCode => _availableLangs.find(l => l.code === langCode)
    // for(let l of _availableLangs) {
    //     if (l.code === langCode) {
    //         return langDefs[l.name]
    //     }
    // }
    // return false

export const getCurrentLangDef = () => getDef(_currentLang)