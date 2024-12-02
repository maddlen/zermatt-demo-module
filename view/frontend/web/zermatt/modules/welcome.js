export default {
    async greet() {
        const response = await fetch(window.BASE_URL + 'zermattdemo/api/welcome', {
            method: 'POST'
        })
        const result = await response.json()
        return result.message
    }
}
