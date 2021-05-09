import * as langDefs from './defs'

let _currentLang = 'en';
let allNames: string[]
let allCodes: string[]

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
export const _setCurrentLang = (langCode: string) => _currentLang = _getAllCodes().indexOf(langCode) > -1 ? langCode : 'en'

export const getDef = (langCode: string) => {
    let l = _availableLangs.find(l => l.code === langCode)
    return langDefs[l ? l.name : "English"]
}

export const getCurrentLangDef = () => getDef(_currentLang)