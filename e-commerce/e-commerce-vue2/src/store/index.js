import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        allBuy: []
    },
    getters: {},
    mutations: {
        changeIsLogin(state, payload) {
            state.isLogin = payload
        },
        addToAllBuy(state, payload) {
            state.allBuy = payload
        }
    },
    actions: {},
    modules: {}
})