import { fetch } from '@tauri-apps/plugin-http';

interface LoginData {
    [key: string]: string;
}

const TELECOM_URL = "http://10.254.241.3/webauth.do?&wlanacname=SC-CD-XXGCDX-SR8810-X";

export async function telecomLogin(studentId: string, password: string) {
    const data: LoginData = {
        loginType: "",
        auth_type: "0",
        isBindMac1: "0",
        pageid: "1",
        templatetype: "1",
        listbindmac: "0",
        recordmac: "0",
        isRemind: "1",
        loginTimes: "",
        groupId: "",
        distoken: "",
        echostr: "",
        url: "",
        isautoauth: "",
        notice_pic_loop2: "/portal/uploads/pc/demo2/images/bj.png",
        notice_pic_loop1: "/portal/uploads/pc/demo2/images/logo.png",
        userId: studentId,
        passwd: password,
        remInfo: "on"
    };

    const headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://10.254.241.3",
        "Referer": "https://10.254.241.3/webauth.do?&wlanacname=SC-CD-XXGCDX-SR8810-X",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/114.0.1823.51"
    };

    try {
        const response = await fetch(TELECOM_URL, {
            method: 'POST',
            headers: headers,
            body: new URLSearchParams(data)
        });
        
        return response;
    } catch (error) {
        console.error('登录失败:', error);
        throw error;
    }
}