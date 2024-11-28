<template>
    <div class="min-h-screen bg-white/80 backdrop-blur-sm" style="padding-top: 32px;">
        <!-- 顶部导航栏 -->
        <header class="bg-white/80 backdrop-blur-sm shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <h1 class="text-xl font-bold text-gray-800">登录成功</h1>
                    <div class="text-gray-600">
                        学号：{{ username }}
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容区域 -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6">
                <h2 class="text-lg font-medium text-gray-800 mb-4">欢迎回来</h2>
                <p class="text-gray-600">您已成功登录校园网。</p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const username = ref('')

onMounted(async () => {
    await userStore.loadUserInfo()
    username.value = userStore.username
})
</script>