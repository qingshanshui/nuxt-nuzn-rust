const fetch = $fetch.create({
    // 请求拦截器
    async onRequest({ options }) {
        options.baseURL = '/v1/rust/api';
        // 添加请求头,没登录不携带token
        let token = useCookie("token").value?.token
        if (!token) return;
        options.headers = new Headers(options.headers);
        options.headers.set("Authorization", `${token}`);
    },

    // 响应拦截
    onResponse({ response }) {
        console.log(response, "response", response.status);
        switch (response.status) {
            case 404:
                // err("服务器资源不存在");
                break;
            case 500:
                // err("服务器内部错误");
                break;
            case 401:
                // 清除缓存
                // err("登录状态已过期，需要重新登录");
                // TODO 跳转到登录界面
                useCookie("token").value = null
                location.href = '/'
                break;
            case 403:
                // err("没有权限访问该资源");
                break;
            default:
            // err("未知错误！");
        }

        // let data = response._data;
        // if (data.code != 200) {
        //     ElMessage.error(data.message);
        //     if (data.message == "请先登录!") {
        //         alert("请先登录")
        //     }
        // }
        // // 在这里判断错误
        // if (response._data.code !== 200) return Promise.resolve(response._data);
        // 成功返回
        return response._data;
    }
});

// 自动导出
export const useHttp = {
    get: (url: string, params?: any) => {
        return fetch(url, { method: "get", params });
    },
    post: (url: string, params?: any) => {
        return fetch(url, { method: "post", body: params });
    },
}; 