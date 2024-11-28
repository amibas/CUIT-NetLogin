import { Store } from '@tauri-apps/plugin-store'
import { defineStore } from 'pinia'
import { enableAutostart, disableAutostart, isAutostartEnabled } from '../config/autostart'

let store = await Store.get('config.json')
if (!store) {
    store = await Store.load('config.json')
}

interface ConfigState {
    autostart: boolean
    rememberPassword: boolean
    autoLogin: boolean
}

export const useConfigStore = defineStore({
    id: 'config',
    state: (): ConfigState => ({
        autostart: false,
        rememberPassword: false,
        autoLogin: false
    }),

    actions: {
        // 读取配置
        async loadConfig() {
            this.autostart = await store.get('autostart') ?? false
            this.rememberPassword = await store.get('rememberPassword') ?? false
            this.autoLogin = await store.get('autoLogin') ?? false
        },

        // 保存配置
        async saveConfig() {
            await store.set('autostart', this.autostart)
            await store.set('rememberPassword', this.rememberPassword)
            await store.set('autoLogin', this.autoLogin)
            await store.save()
        }
    }
})
