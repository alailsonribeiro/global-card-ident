/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2021-01-01 07:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-18 13:34:49
 */
/*
JavaScript identifier for the Credit Card number for Global Issuers/Brands.
Data source: https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_(IIN)
 */

const is = {
    amex: {
        issuer: "American Express",
        brand: "amex",
        logo: require('./svg/amex'),
        prefixes: "34,37",
        mask: ['0000 000000 00000'],
        regex: ['^3[47]\\d{0,13}'],
        active: true,
        length: [13],
        validation: true
    },
    bankcard: {
        issuer: "Bankcard",
        brand: "bankcard",
        logo: require('./svg/bankcard'),
        prefixes: "5610,560221-560221",
        active: false,
        length: [16],
        validation: true
    },
    tunion: {
        issuer: "China T-Union",
        brand: "tunion",
        logo: require('./svg/tunion'),
        prefixes: "31",
        active: true,
        length: [19],
        validation: true
    },
    unionpay: {
        issuer: "China UnionPay",
        brand: "unionpay",
        logo: require('./svg/unionpay'),
        prefixes: "62",
        mask: ['0000 0000 0000 0000'],
        regex: ['^62\\d{0,14}'],
        active: true,
        length: [16, 19],
        validation: true
    },
    enroute: {
        issuer: "Diners Club enRoute",
        brand: "enroute",
        logo: require('./svg/enroute'),
        prefixes: "2014",
        active: true,
        length: [15],
        validation: false
    },
    diners: {
        issuer: "Diners Club International",
        brand: "diners",
        logo: require('./svg/diners'),
        prefixes: "36,54,300-305",
        mask: ['0000 000000 0000'],
        regex: ['^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}'],
        active: true,
        length: [16],
        validation: true
    },
    discover: {
        issuer: "Discover Card",
        brand: "discover",
        logo: require('./svg/discover'),
        prefixes: "6011, 622126-622925, 644-649, 65",
        mask: ['0000 0000 0000 0000'],
        regex: ['^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}'],
        active: true,
        length: [16, 19],
        validation: true
    },
    ukrcard: {
        issuer: "UkrCard",
        brand: "ukrcard",
        logo: require('./svg/ukrcard'),
        prefixes: "60400100-60420099",
        active: true,
        length: [16, 19],
        validation: true
    },
    rupay: {
        issuer: "RuPay",
        brand: "rupay",
        logo: require('./svg/rupay'),
        prefixes: "60, 6521, 6522",
        active: true,
        length: [16],
        validation: true
    },
    interpay: {
        issuer: "InterPayment",
        brand: "interpay",
        logo: require('./svg/interpay'),
        prefixes: "636",
        active: true,
        length: [16, 19],
        validation: true
    },
    instapay: {
        issuer: "InstaPayment",
        brand: "instapay",
        logo: require('./svg/instapay'),
        prefixes: "637-639",
        mask: ['0000 0000 0000 0000'],
        regex: ['^63[7-9]\\d{0,13}'],
        active: true,
        length: [16],
        validation: true
    },
    jcb: {
        issuer: "JCB",
        brand: "jcb",
        logo: require('./svg/jcb'),
        prefixes: "2131,1800,3528–3589",
        length: [13, 16],
        mask: ['0000 000000 00000', '0000 0000 0000 0000'],
        regex: ['^(?:2131|1800)\\d{0,11}', '^(?:35\\d{0,2})\\d{0,12}'],
        active: true,
        validation: true
    },
    laser: {
        issuer: "Laser",
        brand: "laser",
        logo: require('./svg/laser'),
        prefixes: "6304, 6706, 6771, 6709",
        active: false,
        length: [16, 19],
        validation: true
    },
    maestro: {
        issuer: "Maestro",
        brand: "maestro",
        logo: require('./svg/maestro'),
        prefixes: "5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763, 6759, 676770, 676774",
        mask: ['0000 0000 0000 0000'],
        regex: ['^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}'],
        active: true,
        length: [12, 19],
        validation: true
    },
    dankort: {
        issuer: "Dankort",
        brand: "dankort",
        logo: require('./svg/dankort'),
        prefixes: "5019,4571,4175",
        mask: '0000-0000-0000-0000',
        regex: '^(5019|4175|4571)\\d{0,12}',
        active: true,
        length: [16],
        validation: true
    },
    mir: {
        issuer: "MIR",
        brand: "mir",
        logo: require('./svg/mir'),
        prefixes: "2200–2204",
        mask: ['0000 0000 0000 0000'],
        regex: ['^220[0-4]\\d{0,12}'],
        active: true,
        length: [16],
        validation: true
    },
    nps: {
        issuer: "NPS Pridnestrovie",
        brand: "nps",
        logo: require('./svg/nps'),
        prefixes: "6054740-6054744",
        active: true,
        length: [16],
        validation: true
    },
    mastercard: {
        issuer: "Mastercard",
        brand: "mastercard",
        logo: require('./svg/mastercard'),
        prefixes: "51–55",
        mask: '0000 0000 0000 0000',
        regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
        active: true,
        length: [16],
        validation: true
    },
    solo: {
        issuer: "Solo",
        brand: "solo",
        logo: require('./svg/solo'),
        prefixes: "6334, 6767",
        active: false,
        length: [16, 17, 18],
        validation: true
    },
    switch: {
        issuer: "Switch",
        brand: "switch",
        logo: require('./svg/switch'),
        prefixes: "4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759",
        active: false,
        length: [16, 17, 18],
        validation: true
    },
    troy: {
        issuer: "Troy",
        brand: "troy",
        logo: require('./svg/troy'),
        prefixes: "979200–979289",
        active: true,
        length: [16],
        validation: true
    },
    visa: {
        issuer: "Visa",
        brand: "visa",
        logo: require('./svg/visa'),
        prefixes: "4",
        mask: ['0000 0000 0000 0000'],
        regex: ['^4\\d{0,15}'],
        active: true,
        length: [13, 16],
        validation: true
    },
    visaelectron: {
        issuer: "Visa Electron",
        brand: "visaelectron",
        logo: require('./svg/visaelectron'),
        prefixes: "4026, 417500, 4508, 4844, 4913, 4917",
        active: true,
        length: [16],
        validation: true
    },
    uatp: {
        issuer: "UATP",
        brand: "uatp",
        logo: require('./svg/utap'),
        prefixes: "1",
        active: true,
        length: [15],
        validation: true
    },
    verve: {
        issuer: "Verve",
        brand: "verve",
        logo: require('./svg/verve'),
        prefixes: "506099–506198, 650002–650027",
        active: true,
        length: [16, 19],
        validation: false
    },
    lankapay: {
        issuer: "LankaPay",
        brand: "lankapay",
        logo: require('./svg/lankapay'),
        prefixes: "357111",
        active: true,
        length: [16],
        validation: false
    },
    cibc: {
        issuer: "Canadian Imperial Bank of Commerce",
        brand: "cibc",
        logo: require('./svg/cibc'),
        prefixes: "4506",
        active: true,
        length: [16],
        validation: true
    },
    rbc: {
        issuer: "Royal Bank of Canada",
        brand: "rbc",
        logo: require('./svg/rcb'),
        prefixes: "45",
        active: true,
        length: [16],
        validation: true
    },
    td: {
        issuer: "TD Canada Trust",
        brand: "td",
        logo: require('./svg/td'),
        prefixes: "4724",
        active: true,
        length: [16],
        validation: true
    },
    scotiabank: {
        issuer: "Scotiabank Scotia Card",
        brand: "scotiabank",
        logo: require('./svg/scotiabank'),
        prefixes: "4536",
        active: true,
        length: [16],
        validation: true
    },
    bmo: {
        issuer: "BMO ABM Card",
        brand: "bmo",
        logo: require('./svg/bmo'),
        prefixes: "500,5510",
        active: true,
        length: [16],
        validation: true
    },
    hsbc: {
        issuer: "HSBC Bank Canada Card",
        brand: "hsbc",
        logo: require('./svg/hsbc'),
        prefixes: "56",
        active: true,
        length: [16],
        validation: true
    },
    unknow: {
        issuer: "Unknow Credit Card",
        brand: "???",
        mask: ['0000 0000 0000 0000'],
        logo: require('./svg/unknow'),
        active: false,
        length: [16],
        validation: false
    },
}

module.exports = {
    0: (c) => {
        let industry = "ISO/TC 68 and other industry assignments"
        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    },
    1: (c) => {
        let industry = "Airlines",
            p4 = Number(c.substring(0, 4))
        if (p4 === 1800) return Object.assign(is.jcb, { number: Number(c), industry: industry })
        return Object.assign(is.uatp, { number: Number(c), industry: industry })
    },
    2: (c) => {
        let industry = "Airlines, financial and other future industry assignments",
            p4 = Number(c.substring(0, 4))

        if (p4 === 2014) return Object.assign(is.enroute, { number: Number(c), industry: industry })
        if (p4 === 2131) return Object.assign(is.jcb, { number: Number(c), industry: industry })
        if (p4 > 2199 && p4 < 2205) return Object.assign(is.mir, { number: Number(c), industry: industry })
        if (p4 > 2220 && p4 < 2721) return Object.assign(is.mastercard, { number: Number(c), industry: industry })

        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })
    },
    3: (c) => {
        let industry = "Travel and entertainment",
            p2 = Number(c.substring(0, 2)),
            p3 = Number(c.substring(0, 3)),
            p4 = Number(c.substring(0, 4)),
            p6 = Number(c.substring(0, 6))

        if (p6 === 357111) return Object.assign(is.enroute, { number: Number(c), industry: industry })

        if (p4 > 3527 && p4 < 3590) return Object.assign(is.jcb, { number: Number(c), industry: industry })

        if (p3 > 299 && p3 < 306) return Object.assign(is.diners, { number: Number(c), industry: industry })

        if (p2 === 31) return Object.assign(is.tunion, { number: Number(c), industry: industry })
        if (p2 === 36) return Object.assign(is.diners, { number: Number(c), industry: industry })

        if ([34, 37].includes(p2)) return Object.assign(is.amex, { number: Number(c), industry: industry })

        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    },
    4: (c) => {
        let industry = "Banking and financial",
            p2 = Number(c.substring(0, 2)),
            p4 = Number(c.substring(0, 4)),
            p6 = Number(c.substring(0, 6))

        if (p6 === 417500) return Object.assign(is.visaelectron, { number: Number(c), industry: industry })

        if ([4026, 4508, 4844, 4913, 4917].includes(p4)) return Object.assign(is.visaelectron, { number: Number(c), industry: industry })
        if ([4903, 4905, 4911, 4936].includes(p4)) return Object.assign(is.switch, { number: Number(c), industry: industry })
        if ([4571, 4575].includes(p4)) return Object.assign(is.dankort, { number: Number(c), industry: industry })
        if (p4 === 4506) return Object.assign(is.cibc, { number: Number(c), industry: industry })

        if (p2 === 45) return Object.assign(is.rbc, { number: Number(c), industry: industry })

        return Object.assign(is.visa, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    },
    5: (c) => {
        let industry = "Banking and financial",
            p2 = Number(c.substring(0, 2)),
            p3 = Number(c.substring(0, 3)),
            p4 = Number(c.substring(0, 4)),
            p6 = Number(c.substring(0, 6))

        if (p6 > 560220 && p6 < 560226) return Object.assign(is.bankcard, { number: Number(c), industry: industry })
        if (p6 > 506098 && p6 < 506199) return Object.assign(is.verve, { number: Number(c), industry: industry })
        if (p6 === 564182) return Object.assign(is.switch, { number: Number(c), industry: industry })

        if (p4 === 5019) return Object.assign(is.dankort, { number: Number(c), industry: industry })
        if ([5018, 5020, 5038, 5893].includes(p4)) return Object.assign(is.maestro, { number: Number(c), industry: industry })
        if (p4 === 5510) return Object.assign(is.bmo, { number: Number(c), industry: industry })
        if (p4 === 5610) return Object.assign(is.bankcard, { number: Number(c), industry: industry })

        if (p3 === 500) return Object.assign(is.bmo, { number: Number(c), industry: industry })

        if ([51, 52, 53, 55].includes(p2)) return Object.assign(is.mastercard, { number: Number(c), industry: industry })
        if (p2 === 54) return Object.assign(is.diners, { number: Number(c), industry: industry })
        if (p2 === 56) return Object.assign(is.hsbc, { number: Number(c), industry: industry })

        return Object.assign(is.mastercard, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    },
    6: (c) => {
        let industry = "Merchandising and banking/financial",
            p2 = Number(c.substring(0, 2)),
            p3 = Number(c.substring(0, 3)),
            p4 = Number(c.substring(0, 4)),
            p6 = Number(c.substring(0, 6)),
            p7 = Number(c.substring(0, 7)),
            p8 = Number(c.substring(0, 8))

        if (p8 > 60400099 && p8 < 60420100) return Object.assign(is.ukrcard, { number: Number(c), industry: industry })

        if (p7 > 6054739 && p7 < 6054745) return Object.assign(is.nps, { number: Number(c), industry: industry })

        if ([676770, 676774].includes(p6)) return Object.assign(is.maestro, { number: Number(c), industry: industry })
        if (p6 > 622125 && p6 < 622926) return Object.assign(is.discover, { number: Number(c), industry: industry })
        if (p6 === 633110) return Object.assign(is.switch, { number: Number(c), industry: industry })
        if (p6 > 650001 && p6 < 650028) return Object.assign(is.verve, { number: Number(c), industry: industry })

        if (p4 === 6011) return Object.assign(is.discover, { number: Number(c), industry: industry })
        if (p4 === 6759) return Object.assign(is.maestro, { number: Number(c), industry: industry })
        if ([6521, 6522].includes(p4)) return Object.assign(is.rupay, { number: Number(c), industry: industry })
        if ([6334, 6767].includes(p4)) return Object.assign(is.solo, { number: Number(c), industry: industry })
        if ([6333, 6759].includes(p4)) return Object.assign(is.switch, { number: Number(c), industry: industry })
        if ([6304, 6706, 6771, 6709].includes(p4)) return Object.assign(is.laser, { number: Number(c), industry: industry })
        if ([6304, 6759, 6761, 6762, 6763].includes(p4)) return Object.assign(is.maestro, { number: Number(c), industry: industry })

        if (p3 === 636) return Object.assign(is.interpay, { number: Number(c), industry: industry })
        if (p3 > 636 && p3 < 640) return Object.assign(is.instapay, { number: Number(c), industry: industry })
        if (p3 > 643 && p3 < 650) return Object.assign(is.discover, { number: Number(c), industry: industry })

        if (p2 === 60) return Object.assign(is.rupay, { number: Number(c), industry: industry })
        if (p2 === 62) return Object.assign(is.unionpay, { number: Number(c), industry: industry })
        if (p2 === 65) return Object.assign(is.discover, { number: Number(c), industry: industry })

        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    },
    7: (c) => {
        let industry = "Merchandising and banking/financial"

        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })
    },
    8: (c) => {
        let industry = "Healthcare, telecommunications and other future industry assignments"
        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })
    },
    9: (c) => {
        let industry = "For assignment by national standards bodies",
            p6 = Number(c.substring(0, 6))

        if (p6 > 979199 && p6 < 979290) return Object.assign(is.troy, { number: Number(c), industry: industry })

        return Object.assign(is.unknow, { number: Number(c), prefixes: c.substring(0, 1), industry: industry })

    }

}



