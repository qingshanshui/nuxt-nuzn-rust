export default {
    getBaseUrl() {
        if (process.server) {
            return "http://127.0.0.1:8002"
        } else {
            return "/"
        }
    }
}