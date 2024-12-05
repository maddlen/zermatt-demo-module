export default {
    query: '',
    loading: false,
    results: [],

    init () {
        document.querySelector('#search_mini_form #search').addEventListener('input', this.debounce(this.onInputChange.bind(this)))
    },

    debounce (func) {
        let timeoutId
        return function (...args) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func.apply(this, args), 300)
        }
    },
    onInputChange (e) {
        this.results = []
        this.query = e.target.value
        this.doQuery()
    },

    async doQuery() {
        if (this.query.length > 2) {
            this.loading = true
            const response = await fetch(`https://dummyjson.com/products/search?q=${this.query}`)
            const result = await response.json()
            this.loading = false
            this.results = result.products.slice(0, 4)
        }
    }
}
