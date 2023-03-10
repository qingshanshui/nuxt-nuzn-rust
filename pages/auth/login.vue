<template>
    <div class="login w">
        <div class="container">
            <div class="login-content">
                <div class="login-content-logo ">
                    <a href="/">
                        <img src="https://pan.nuzn.cn/v1/download?path=/image/rust.jpg" alt="rust论坛">
                    </a>
                </div>
                <div class="login-content-Email">
                    <div class="input-control has-icon-left input-group">
                        <input id="inputPasswordExampleEmail" type="email" class="form-control" placeholder="邮箱" value="">
                        <label for="inputPasswordExampleEmail" class="input-control-icon-left"><i
                                class="icon icon-envelope"></i></label>
                        <span class="input-group-btn">
                            <template v-if="state.sendCodeTime == 0">
                                <button class="btn btn-default" type="button" @click="sendCode" v-if="!state.show">
                                    发送验证码
                                </button>
                                <button class="btn btn-default load-indicator loading" type="button" disabled v-else>
                                    发送中
                                </button>
                            </template>
                            <button class="btn btn-default" type="button" disabled v-else>
                                {{ state.sendCodeTime }}秒后可重发</button>
                        </span>
                    </div>
                </div>
                <div class="login-content-pass">
                    <div class="input-control has-icon-left">

                        <input id="inputPasswordExamplePass" type="password" class="form-control" placeholder="验证码"
                            value="">
                        <label for="inputPasswordExamplePass" class="input-control-icon-left"><i
                                class="icon icon-key"></i></label>
                    </div>
                </div>
                <div class="login-content-submit">
                    <button class="btn btn-block btn-primary" type="button" @click="submit">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const state = reactive({
    sendCodeTime: 0,// 短信倒计时
    show: false,// 发送中
})
// 登录
const submit = async () => {
    // 效验参数
    let email = $("#inputPasswordExampleEmail").val()
    let pass = $("#inputPasswordExamplePass").val()
    if (!email) return new $.zui.Messager('提示消息：邮箱不能为空', {
        type: 'warning'
    }).show();
    if (!pass) return new $.zui.Messager('提示消息：验证码不能为空', {
        type: 'warning'
    }).show();
    // 发送请求
    const res: any = await $fetch('/v1/rust/api/auth/login', {
        baseURL: utils.getBaseUrl(),
        method: "POST",
        body: {
            "email": email,
            "code": pass
        }
    })
    if (res.code === 1000) {
        new $.zui.Messager('提示消息：登录成功', {
            type: 'success'
        }).show();
        const token = useCookie("token", {
            maxAge: 60 * 60 * 24 * 14
        })
        token.value = res.data
        location.href = "/"
    } else {
        new $.zui.Messager(`提示消息：${res.data}`, {
            type: 'warning'
        }).show();
    }
}
// 发送短信验证码
const sendCode = async () => {
    // 效验参数
    let email = $("#inputPasswordExampleEmail").val()
    if (!email) return new $.zui.Messager('提示消息：邮箱不能为空', {
        type: 'warning'
    }).show();
    state.show = true
    // 发送请求
    const res: any = await $fetch('/v1/rust/api/auth/code', {
        method: "POST",
        baseURL: utils.getBaseUrl(),
        body: {
            "email": email
        }
    })
    if (res.code === 1000) {
        new $.zui.Messager('提示消息：验证码发送成功', {
            type: 'success'
        }).show();
        state.sendCodeTime = 60
        let sendCodeTimer = setInterval(() => {
            state.sendCodeTime = state.sendCodeTime - 1
            if (state.sendCodeTime === 0) {
                clearInterval(sendCodeTimer)
                state.show = false
            }
        }, 1000)
    } else {
        new $.zui.Messager(`提示消息：${res.data}`, {
            type: 'warning'
        }).show();
    }
}

definePageMeta({
    layout: false
})
</script>

<style>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #f7f8fa;
}

.container {
    width: 100%;
    background-color: var(--bag)
}

.login-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 390px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 10px 30px -5px rgb(0 0 0 / 30%);
}

.login-content>div {
    padding: 10px;
    width: 100%;
}

.login-content-logo {
    text-align: center;
}

.login-content-logo img {
    width: 150px;
}

:focus:not([tabindex^='-']) {
    outline: none
}
</style>