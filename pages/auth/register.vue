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
                <div class="login-content-pass">
                    <div class="input-control has-icon-left input-group">
                        <input id="inputPasswordExamplePass" type="password" class="form-control" placeholder="邮箱" value="">
                        <label for="inputPasswordExamplePass" class="input-control-icon-left"><i
                                class="icon icon-envelope"></i></label>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" @click="sendCode">发送验证码</button>
                        </span>
                    </div>
                </div>
                <div class="login-content-pass">
                    <div class="input-control has-icon-left">
                        <input id="inputPasswordExamplePass2" type="password2" class="form-control" placeholder="验证码"
                            value="">
                        <label for="inputPasswordExamplePass2" class="input-control-icon-left"><i
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
const register = async () => {
    const { data: count } = await $fetch('/v1/rust/api/auth/register', {
        method: "POST",
        body: {
            "email": "admin@dbsgw.cn",
            "nickName": "刘洋",
            "code": "a79ddb60"
        }
    })
    console.log("注册");
}
const sendCode = async () => {
    const { data: count } = await $fetch('/v1/rust/api/auth/code', {
        method: "POST",
        body: {
            "email": "admin@dbsgw.cn"
        }
    })
    console.log("发送短信验证码", count);
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