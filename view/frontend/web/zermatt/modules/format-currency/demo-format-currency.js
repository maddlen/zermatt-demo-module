export default {
    locales: {
        'store': { locale: Zermatt.Variables.locale, currency: Zermatt.Variables.currency.code },
        'fr_FR': { locale: 'fr_FR', currency: 'EUR' }
    },
    amount: Zermatt.Variables.currencyAmount,

    currentLocale: 'store',

    otherLocale () {
        return this.currentLocale === 'store' ? 'fr_FR' : 'store'
    },

    formattedAmount () {
        return Zermatt.Money.formatPrice(this.amount, this.locales[this.currentLocale])
    },

    switchLocale () {
        this.currentLocale = this.otherLocale()
    }
}

