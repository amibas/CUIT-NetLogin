import {fetch} from '@tauri-apps/plugin-http';

export async function verifyLogin(): Promise<Response> {
    try {
        return await fetch('https://www.baidu.com', {
            method: 'GET',
        });
    } catch (error) {
        console.error('网络连接检查失败:', error);
        throw error;
    }
}
