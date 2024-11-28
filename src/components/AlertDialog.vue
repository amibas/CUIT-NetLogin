<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- 背景遮罩 -->
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="onClose"></div>
      
      <!-- 提示框 -->
      <div class="relative bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
        <h3 class="text-lg font-medium text-gray-900 mb-4">{{ title }}</h3>
        <p class="text-gray-500 mb-6">{{ message }}</p>
        <div class="flex justify-end">
          <button
            @click="onClose"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  title: string
  message: string
  onClose: () => void
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 