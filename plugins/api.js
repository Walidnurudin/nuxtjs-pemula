export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        }
    })

    // Set baseURL to something different
    // api.setHeader("authorizatiommmm", "123")
    // api.setToken("token", "abc")
    api.setBaseURL('https://indonesia-covid-19.mathdro.id')

    // Inject to context as $api
    inject('api', api)
}