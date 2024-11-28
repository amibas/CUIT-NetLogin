<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Window, PhysicalSize } from '@tauri-apps/api/window'
import { platform } from '@tauri-apps/plugin-os'
import TitleBar from './views/TitleBar.vue'

const isPhone = ref(false)
const currentPlatform = ref('')

onMounted(async () => {
  currentPlatform.value = platform()
  
  if (currentPlatform.value === 'android' || currentPlatform.value === 'ios') {
    isPhone.value = true
  }
  
  const contentWidth = document.body.scrollWidth
  const contentHeight = document.body.scrollHeight
  await Window.getCurrent().setSize(new PhysicalSize(contentWidth, contentHeight))
})
</script>

<template>
    <div class="app-container">
        <TitleBar v-if="!isPhone" />
        <router-view></router-view>
    </div>
</template>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>