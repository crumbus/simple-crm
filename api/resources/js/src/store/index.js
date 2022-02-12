import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

function clearToken() {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
}

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {
            firstName: 'Guest',
            lastName: '',
            avatar: ''
        }
    },

    getters: {
        isLogged: state => !!state.token,
        authStatus: state => state.status,
        userFullName: state => state.user.firstName + ' ' + state.user.lastName ?? '',
        userAvatar: state => state.user.firstName.substr(0,1),
    },

    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, payload) {
            state.status = 'success';
            state.token = payload.token;
            state.user = payload.user;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
        },
    },

    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'api/auth/login', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.access_token;
                        const user = resp.data.user;
                        const expires = resp.data.expires_in;

                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;

                        commit('auth_success', {token: token, user: user});
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error');
                        clearToken();
                        reject(err);
                    });
            });
        },

        register({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'api/auth/register', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;

                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', {token: token, user: user});
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        clearToken();
                        reject(err);
                    });
            });
        },

        logout({commit}) {
            return new Promise((resolve, reject) => {
                axios({url: 'api/auth/logout', data: {}, method: 'POST'})
                    .then(resp => {
                        commit('logout');
                        clearToken();
                        resolve();
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        clearToken();
                        reject(err);
                    });
            });
        }
    },

    modules: {}
});
