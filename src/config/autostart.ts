import {enable, disable, isEnabled} from '@tauri-apps/plugin-autostart'

export async function enableAutostart(): Promise<void> {
    try {
        await enable()
    } catch (error) {
        console.error('启用开机启动失败:', error)
        throw error
    }
}

export async function disableAutostart(): Promise<void> {
    try {
        await disable()
    } catch (error) {
        console.error('禁用开机启动失败:', error)
        throw error
    }
}

export async function isAutostartEnabled(): Promise<boolean> {
    try {
        return await isEnabled()
    } catch (error) {
        console.error('检查开机启动状态失败:', error)
        return false
    }
}

