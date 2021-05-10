/**
 * Extracted the locales from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 * Added a class 'ltbl' in table, and then ran the following script
 * 
    var a = {}
    $('.ltbl tr').each(function() {
        a[$(this).find('td:nth-child(5)').text()] = $(this).find('td:nth-child(4)').text()
    })
    copy(a)
    
 */

const LOCALES = {
    "ab": "аҧсуа бызшәа, аҧсшәа",
    "aa": "Afaraf",
    "af": "Afrikaans",
    "ak": "Akan",
    "sq": "Shqip",
    "am": "አማርኛ",
    "ar": "العربية",
    "an": "aragonés",
    "hy": "Հայերեն",
    "as": "অসমীয়া",
    "av": "авар мацӀ, магӀарул мацӀ",
    "ae": "avesta",
    "ay": "aymar aru",
    "az": "azərbaycan dili, تۆرکجه",
    "bm": "bamanankan",
    "ba": "башҡорт теле",
    "eu": "euskara, euskera",
    "be": "беларуская мова",
    "bn": "বাংলা",
    "bh": "भोजपुरी",
    "bi": "Bislama",
    "bs": "bosanski jezik",
    "br": "brezhoneg",
    "bg": "български език",
    "my": "ဗမာစာ",
    "ca": "català, valencià",
    "ch": "Chamoru",
    "ce": "нохчийн мотт",
    "ny": "chiCheŵa, chinyanja",
    "zh": "中文 (Zhōngwén), 汉语, 漢語",
    "cv": "чӑваш чӗлхи",
    "kw": "Kernewek",
    "co": "corsu, lingua corsa",
    "cr": "ᓀᐦᐃᔭᐍᐏᐣ",
    "hr": "hrvatski jezik",
    "cs": "čeština, český jazyk",
    "da": "dansk",
    "dv": "ދިވެހި",
    "nl": "Nederlands, Vlaams",
    "dz": "རྫོང་ཁ",
    "en": "English",
    "eo": "Esperanto",
    "et": "eesti, eesti keel",
    "ee": "Eʋegbe",
    "fo": "føroyskt",
    "fj": "vosa Vakaviti",
    "fi": "suomi, suomen kieli",
    "fr": "français, langue française",
    "ff": "Fulfulde, Pulaar, Pular",
    "gl": "Galego",
    "ka": "ქართული",
    "de": "Deutsch",
    "el": "ελληνικά",
    "gn": "Avañe'ẽ",
    "gu": "ગુજરાતી",
    "ht": "Kreyòl ayisyen",
    "ha": "(Hausa) هَوُسَ",
    "he": "עברית",
    "hz": "Otjiherero",
    "hi": "हिन्दी, हिंदी",
    "ho": "Hiri Motu",
    "hu": "magyar",
    "ia": "Interlingua",
    "id": "Bahasa Indonesia",
    "ie": "(originally:) Occidental, (after WWII:) Interlingue",
    "ga": "Gaeilge",
    "ig": "Asụsụ Igbo",
    "ik": "Iñupiaq, Iñupiatun",
    "io": "Ido",
    "is": "Íslenska",
    "it": "Italiano",
    "iu": "ᐃᓄᒃᑎᑐᑦ",
    "ja": "日本語 (にほんご)",
    "jv": "ꦧꦱꦗꦮ, Basa Jawa",
    "kl": "kalaallisut, kalaallit oqaasii",
    "kn": "ಕನ್ನಡ",
    "kr": "Kanuri",
    "ks": "कश्मीरी, كشميري‎",
    "kk": "қазақ тілі",
    "km": "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
    "ki": "Gĩkũyũ",
    "rw": "Ikinyarwanda",
    "ky": "Кыргызча, Кыргыз тили",
    "kv": "коми кыв",
    "kg": "Kikongo",
    "ko": "한국어",
    "ku": "Kurdî, کوردی‎",
    "kj": "Kuanyama",
    "la": "latine, lingua latina",
    "lb": "Lëtzebuergesch",
    "lg": "Luganda",
    "li": "Limburgs",
    "ln": "Lingála",
    "lo": "ພາສາລາວ",
    "lt": "lietuvių kalba",
    "lu": "Kiluba",
    "lv": "latviešu valoda",
    "gv": "Gaelg, Gailck",
    "mk": "македонски јазик",
    "mg": "fiteny malagasy",
    "ms": "Bahasa Melayu, بهاس ملايو‎",
    "ml": "മലയാളം",
    "mt": "Malti",
    "mi": "te reo Māori",
    "mr": "मराठी",
    "mh": "Kajin M̧ajeļ",
    "mn": "Монгол хэл",
    "na": "Dorerin Naoero",
    "nv": "Diné bizaad",
    "nd": "isiNdebele",
    "ne": "नेपाली",
    "ng": "Owambo",
    "nb": "Norsk Bokmål",
    "nn": "Norsk Nynorsk",
    "no": "Norsk",
    "ii": "ꆈꌠ꒿ Nuosuhxop",
    "nr": "isiNdebele",
    "oc": "occitan, lenga d'òc",
    "oj": "ᐊᓂᔑᓈᐯᒧᐎᓐ",
    "cu": "ѩзыкъ словѣньскъ",
    "om": "Afaan Oromoo",
    "or": "ଓଡ଼ିଆ",
    "os": "ирон æвзаг",
    "pa": "ਪੰਜਾਬੀ, پنجابی‎",
    "pi": "पालि, पाळि",
    "fa": "فارسی",
    "pl": "język polski, polszczyzna",
    "ps": "پښتو",
    "pt": "Português",
    "qu": "Runa Simi, Kichwa",
    "rm": "Rumantsch Grischun",
    "rn": "Ikirundi",
    "ro": "Română",
    "ru": "русский",
    "sa": "संस्कृतम्",
    "sc": "sardu",
    "sd": "सिन्धी, سنڌي، سندھی‎",
    "se": "Davvisámegiella",
    "sm": "gagana fa'a Samoa",
    "sg": "yângâ tî sängö",
    "sr": "српски језик",
    "gd": "Gàidhlig",
    "sn": "chiShona",
    "si": "සිංහල",
    "sk": "Slovenčina, Slovenský jazyk",
    "sl": "Slovenski jezik, Slovenščina",
    "so": "Soomaaliga, af Soomaali",
    "st": "Sesotho",
    "es": "Español",
    "su": "Basa Sunda",
    "sw": "Kiswahili",
    "ss": "SiSwati",
    "sv": "Svenska",
    "ta": "தமிழ்",
    "te": "తెలుగు",
    "tg": "тоҷикӣ, toçikī, تاجیکی‎",
    "th": "ไทย",
    "ti": "ትግርኛ",
    "bo": "བོད་ཡིག",
    "tk": "Türkmen, Түркмен",
    "tl": "Wikang Tagalog",
    "tn": "Setswana",
    "to": "Faka Tonga",
    "tr": "Türkçe",
    "ts": "Xitsonga",
    "tt": "татар теле, tatar tele",
    "tw": "Twi",
    "ty": "Reo Tahiti",
    "ug": "ئۇيغۇرچە‎, Uyghurche",
    "uk": "Українська",
    "ur": "اردو",
    "uz": "Oʻzbek, Ўзбек, أۇزبېك‎",
    "ve": "Tshivenḓa",
    "vi": "Tiếng Việt",
    "vo": "Volapük",
    "wa": "Walon",
    "cy": "Cymraeg",
    "wo": "Wollof",
    "fy": "Frysk",
    "xh": "isiXhosa",
    "yi": "ייִדיש",
    "yo": "Yorùbá",
    "za": "Saɯ cueŋƅ, Saw cuengh",
    "zu": "isiZulu"
}

let currentLocale = 'en' // always fallback to English

export const getLocales = () => ({ ...LOCALES })   // return a copy, no accidental modification

//  export const getLangs = () => Object.values(LOCALES)

//  export const getLocaleCodes = () => Object.keys(LOCALES)

export const getCurrentLocale = () => currentLocale

/**
 * Set current locale if only a valid one, else keep 'en'
 * @param localeCode 
 */
export const setCurrentLocale = (localeCode: string) => {
    if (Object.keys(LOCALES).includes(localeCode)) {
        currentLocale = localeCode
    }
    else {
        console.log('The passed locale code ' + localeCode + ' is not a valid local codes.')
        console.log('For your help, this are valid locales -')
        console.log(JSON.stringify(getLocales(), null, 4))
    }
}

/**
 * Convert a number to a local string representation,
 * e.g. in Bengali 97 => "৯৭"
 * @param num any number
 * @returns 
 */
export const numToLocale = (num: number | bigint):string => new Intl.NumberFormat(currentLocale).format(num)