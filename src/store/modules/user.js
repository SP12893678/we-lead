import axios from 'axios'
const $http = axios
const initState = function () {
    return {
        id_token: '',
        login_token: '',
        is_teacher: '',
        user_name: '',
        avatar: ''
    }
}
const state = initState()
const getters = {}

// actions
const actions = {
    test ({ commit, state }, data) {
        console.log('cross state test', data)
    },
    getUserData ({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', { api: 'profile' }, { root: true }).then((data) => {
                if (data.status) {
                    commit('setUserData', data.result)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    }

}

// mutations
const mutations = {

    setUserLogin (state, value) {
        state.id_token = value.id_token
        state.login_token = value.login_token
    },
    setUserLogout (state) {
        state.id_token = ''
        state.login_token = ''
    },
    setUserData (state, value) {
        state.user_name = value.user_name
        state.is_teacher = value.is_teacher
    },

    reset (state) {
        state = Object.assign(state, initState())
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
