// store.js
import { defineStore } from "pinia";
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: "userToken",
    // state: 返回对象的函数
    state: ()=> ({
        token: "",
        permissions:""
    }),
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage, paths: ['token'] },
            { storage: localStorage, paths: ['permissions'] },
        ],
    },
    getters: {
        returnToken(state) {
            return state.token;
        },
        returnPermissions(state) {
            return state.permissions;
        }
    },
    actions: {
        changeToken(token:string) {
            this.token = token
        },
        changePermissions(permissions:string) {
            this.permissions = permissions;
        }
    }
});
