import {defineStore} from "pinia";

export const useUserStore = defineStore('storeUser', {
    state: ()=> ({
        name: "",
        age:18
    }),
    persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage, paths: ['name'] },
            { storage: localStorage, paths: ['age'] },
        ],
    },
    actions: {
        changeToken(token:string) {
            this.name = token
        },
        changePermissions(age:number) {
            this.age = age;
        }
    }
})
