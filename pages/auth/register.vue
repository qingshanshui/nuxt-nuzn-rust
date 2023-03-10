<template>
    <div class="login w">
        <div class="container">
            <div class="login-content">
                <div class="login-content-logo ">
                    <a href="/">
                        <img src="https://pan.nuzn.cn/v1/download?path=/image/rust.jpg" alt="rust论坛">
                    </a>
                </div>
                <div class="login-content-user">
                    <div class="input-control has-icon-left">
                        <input id="inputAccountExampleUser" type="text" class="form-control" placeholder="昵称" value="">
                        <label for="inputAccountExampleUser" class="input-control-icon-left"><i
                                class="icon icon-user "></i></label>
                    </div>
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
                    <button class="btn btn-block btn-primary" type="button" @click="register">注册</button>
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
const register = async () => {
    // 效验参数
    let user = $("#inputAccountExampleUser").val()
    let email = $("#inputPasswordExampleEmail").val()
    let pass = $("#inputPasswordExamplePass").val()
    if (!user) return new $.zui.Messager('提示消息：昵称不能为空', {
        type: 'warning'
    }).show();
    if (!email) return new $.zui.Messager('提示消息：邮箱不能为空', {
        type: 'warning'
    }).show();
    if (!pass) return new $.zui.Messager('提示消息：验证码不能为空', {
        type: 'warning'
    }).show();


    // 发送请求
    const res: any = await $fetch('/v1/rust/api/auth/register', {
        baseURL: utils.getBaseUrl(),
        method: "POST",
        body: {
            "email": email,
            "code": pass,
            "nickName": user,
        }
    })
    if (res.code === 1000) {
        new $.zui.Messager('提示消息：注册成功', {
            type: 'success'
        }).show();
        setTimeout(() => {
            location.href = "/auth/login"
        }, 2000);
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
        baseURL: utils.getBaseUrl(),
        method: "POST",
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
        state.show = true
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