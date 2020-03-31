import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    position:{},
    userName:'',
}

const mutations = {
    setPosition(state, val){
        state.position = val.name;
    },
    setUserName(state, val){
        state.userName = val;
    }
}

const actions = {
    setPosition({ commit }, val){
        //异步请求后端获取当前位置的数据
        commit('setPosition', val);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})