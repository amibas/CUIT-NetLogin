import {ref} from 'vue'

export function useMessage() {
    const showAlert = ref(false)
    const alertMessage = ref('')
    const alertTitle = ref('')

    const showError = (title: string, error: unknown) => {
        console.error(`${title}:`, error)
        alertTitle.value = title
        alertMessage.value = error instanceof Error ? error.message : '操作失败，请稍后重试'
        showAlert.value = true
    }

    return {
        showAlert,
        alertMessage,
        alertTitle,
        showError
    }
} 