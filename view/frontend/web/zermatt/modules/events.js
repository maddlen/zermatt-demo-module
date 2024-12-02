export default {
    input: {
        value: '',
        init () {
            Zermatt.Event.on('demo:events:reset', this.reset.bind(this))
        },
        dispatch () {
            Zermatt.Event.dispatch('demo:events:input', this.value)

        },
        onChange (e) {
            this.value = e.target.value
            this.dispatch()
        },
        reset () {
            this.value = ''
            this.dispatch()
        }
    },
    listener: {
        value: '',
        init () {
            Zermatt.Event.on('demo:events:input', this.onChange.bind(this))
        },
        onChange (events) {
            this.value = events[0].detail
        },
        reset() {
            Zermatt.Event.dispatch('demo:events:reset')
        }
    }
}
