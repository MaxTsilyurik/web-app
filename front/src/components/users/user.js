
export default {

    isOAuth() {
       return  localStorage.getItem('user_id') !== null
    },
    logout() {
        localStorage.clear()
    },
}