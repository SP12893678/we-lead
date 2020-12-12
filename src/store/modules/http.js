import axios from 'axios'
import router from '@/router'
/* ----Global AJAX Setting--------- */
axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.API_URL
// axios.defaults.headers.common['remeber_token'] = "";
// axios.defaults.headers.common['id_token'] = "";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
const $http = axios
const api_url = ''
const initState = function () {
    return {

    }
}
const state = initState()
const getters = {}

// actions
const beforeApiCall = (method, api) => {
    consoleLog('is caling...', method, api)
}
const consoleLog = (text, json, data) => {
    if (true || process.env.NODE_ENV == 'development' || window.location.href.indexOf('test') >= 0) {
        console.log(text, json, data)
    }
}
const respondFunc = ({ dispatch, commit, state, rootState, json, data, resolve, reject }) => {
    data.status = parseInt(data.status)
    consoleLog('api called:', json, data)

    if (json.api == 'user' && data.status == 0) {
        router.push({ name: 'logout' })
        return false
    }

    if (data.code == 1) {
        commit('dialogBox', { dialog: true, option: { title: '參數錯誤', message: 'Oops!我們找不到必要的參數！' } }, { root: true })
        return false
    } else if (data.code == 4) {
        router.push({ name: 'logout' })
        return false
    } else {
        return data
    }
}
const getHttpConfig = ({ rootState }) => {
    return {
        headers: {
            id_token: rootState.user.id_token,
            login_token: rootState.user.login_token
        }
    }
}
const actions = {
    post ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            beforeApiCall('post', json.api)
            const api = json.api
            delete json.api
            $http.post(api, json)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    put ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            beforeApiCall('put', json.api)
            $http.put(json.api, json, getHttpConfig({ rootState }))
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    get ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            // let conf = getHttpConfig({ rootState });
            const conf = {}
            conf.params = json
            console.log(conf)
            beforeApiCall('get', json.api)
            $http.get(json.api)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    delete ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            const conf = getHttpConfig({ rootState })
            conf.params = json
            beforeApiCall('delete', json.api)
            $http.delete(json.api, conf)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    mongo_get ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            const conf = getHttpConfig({ rootState })
            conf.params = json
            beforeApiCall('mongo_get', json.api)
            $http.get(process.env.API_URL_MONGODB + json.api, conf)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    mongo_post ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            beforeApiCall('mongo_post', json.api)
            $http.post(process.env.API_URL_MONGODB + json.api, json, getHttpConfig({ rootState }))
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    },
    mongo_put ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            beforeApiCall('mongo_put', json.api)
            $http.put(process.env.API_URL_MONGODB + json.api, json, getHttpConfig({ rootState }))
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox', { dialog: true, option: { title: '網路錯誤', message: '很抱歉，與伺服器連線失敗！請稍後再試。' + error.message } }, { root: true })
                    resolve(false)
                })
        })
    }
}

// mutations
const mutations = {
    reset (state) {
    // state = Object.assign(state, initState());
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
