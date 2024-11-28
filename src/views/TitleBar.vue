<script setup lang="ts">
import {Window} from '@tauri-apps/api/window'

const appWindow = Window.getCurrent();

const minimize = () => {
    console.log(appWindow);
    appWindow.minimize()
}

const close = () => {
    console.log(appWindow);
    appWindow.close()
}
</script>

<template>
    <div data-tauri-drag-region
         class="fixed top-0 left-0 right-0 h-8 bg-gray-800/30 backdrop-blur-md flex justify-between select-none z-50">
        <div data-tauri-drag-region class="flex-grow"></div>
        <div class="flex items-center">
            <button @click="minimize"
                    class="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-700/50 focus:outline-none">
                -
            </button>
            <button @click="close"
                    class="w-8 h-8 flex items-center justify-center text-white hover:bg-red-600/50 focus:outline-none">
                ×
            </button>
        </div>
    </div>
</template>