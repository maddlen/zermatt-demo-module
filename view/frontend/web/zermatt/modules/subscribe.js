export default {
    message: '',
    hasOverlay: false,
    init () {
        Zermatt.Event.on('subscribe:success', this.subscribed.bind(this))
    },
    subscribed (events) {
        const { payload } = events[0].detail
        if (payload) {
            this.message = payload?.response?.messages[0] || ''
            this.hasOverlay = true
        }
    },

    reset () {
        this.message = ''
        this.hasOverlay = false
    }
}
