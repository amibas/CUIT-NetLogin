import {defineStore} from 'pinia'
import {Store} from '@tauri-apps/plugin-store'

let store = await Store.get('user-store.json');
if (!store) {
    store = await Store.load('user-store.json')
}

interface UserState {
    username: string
    password: string
    operator: string
    isLoggedIn: boolean
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        username: '',
        password: '',
        operator: 'telecom',
        isLoggedIn: false
    }),

    actions: {
        // 保存用户信息
        async saveUserInfo() {
            await store.set('username', this.username)
            await store.set('password', this.password)
            await store.set('operator', this.operator)
            await store.save()
        },

        // 读取用户信息
        async loadUserInfo() {
            this.username = await store.get('username') ?? ''
            this.password = await store.get('password') ?? ''
            this.operator = await store.get('operator') ?? 'telecom'
        }
    }
}) 