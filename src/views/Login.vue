<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center" style="padding-top: 32px;">
        <div class="max-w-md w-full bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-8 h-full">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">登录</h2>
            <form @submit.prevent="handleLogin" class="space-y-6">

                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                        用户名
                    </label>
                    <input type="text" id="username" v-model="userStore.username" placeholder="请输入用户名" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                        密码
                    </label>
                    <input type="password" id="password" v-model="userStore.password" placeholder="请输入密码" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
                </div>
                <div>
                    <label for="operator" class="block text-sm font-medium text-gray-700 mb-2">
                        运营商
                    </label>
                    <select id="operator" v-model="userStore.operator"
                        class="w-full px-4 py-2 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none cursor-pointer bg-[url('@/assets/icons/chevron-down.svg')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat backdrop-blur-sm bg-white/30">
                        <option v-for="op in operators" :key="op.value" :value="op.value"
                            class="py-2 px-4 hover:bg-gray-100 backdrop-blur-sm bg-white/70">
                            {{ op.label }}
                        </option>
                    </select>
                </div>
                <div class="flex items-center justify-center gap-8">
                    <label class="flex items-center" for="rememberPassword">
                        <input type="checkbox" id="rememberPassword" v-model="configStore.rememberPassword"
                            class="rounded border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-600">记住密码</span>
                    </label>
                    <label class="flex items-center" for="autoLogin">
                        <input type="checkbox" id="autoLogin" v-model="configStore.autoLogin"
                            class="rounded border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-600">自动登录</span>
                    </label>
                    <label class="flex items-center" for="autoStart">
                        <input type="checkbox" id="autoStart" v-model="configStore.autostart"
                            class="rounded border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-600">开机启动</span>
                    </label>
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    登录
                </button>
            </form>
        </div>
        <AlertDialog :show="showAlert" :title="alertTitle" :message="alertMessage" :onClose="() => showAlert = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { telecomLogin } from '../api/TelecomLogin'
import { verifyLogin } from '../api/VerifyLogin'
import AlertDialog from '../components/AlertDialog.vue'
import { useConfigStore } from '../stores/config'
import { useMessage } from '../hooks/useMessage'

const router = useRouter()
const userStore = useUserStore()
const configStore = useConfigStore()
const { showAlert, alertMessage, alertTitle, showError } = useMessage()

const operators = [
    { value: 'telecom', label: '电信' },
    { value: 'mobile', label: '移动' }
]

const initializeApp = async () => {
    try {
        await configStore.loadConfig()
        await userStore.loadUserInfo()
    } catch (error) {
        showError('初始化失败', error)
    }
}

onMounted(initializeApp)

const handleLogin = async () => {
    try {
        await configStore.saveConfig()
        await telecomLogin(userStore.username, userStore.password)
        const isLogin = await verifyLogin()

        if (!configStore.rememberPassword) {
            userStore.password = ''
        }

        if (isLogin.status === 200) {
            await userStore.saveUserInfo()
            await router.push('/dashboard')
        } else {
            showError('登录失败', new Error('请检查用户名和密码'))
        }
    } catch (error) {
        showError('登录失败', error)
    }
}

</script>

<style scoped>
.error-message {
    color: rgb(239 68 68);
    font-size: 0.875rem;
    margin-top: 0.25rem;
}
</style>
