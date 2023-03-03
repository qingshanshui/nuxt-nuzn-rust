<template>
    <header class="header">
        <div class="container ">
            <div class="logo flex-none">
                <a href="/">
                    <img src="https://pan.nuzn.cn/v1/download?path=/image/rust.jpg" alt="rust">
                </a>
            </div>
            <div class="nav">

            </div>
            <div class="search hidden-xs">
                <NInput round placeholder="搜索" />
            </div>
            <div class="user " v-if="!isLogin">
                <a href="/auth/login">
                    登录
                </a>
                <a href="/auth/register">
                    注册
                </a>
            </div>
            <div class="user-login" v-else="isLogin">
                <div class="btn-group dropdown-hover">
                    <img src="http://openzui.com/docs/img/img2.jpg" data-toggle="dropdown" width="33px" height="33px"
                        class="img-circle" alt="圆形图片">
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="###" @click="clickDropdown('add')">发帖子</a></li>
                        <li><a href="###" @click="clickDropdown('admin')">设置</a></li>
                        <li><a href="###" @click="clickDropdown('logout')">推出</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NInput, NDropdown, NButton, NIcon } from 'naive-ui'
let state = reactive({
    options: [
        {
            label: '发帖子',
            key: 'add',
        },
        {
            label: '设置',
            key: 'admin',
        },
        {
            label: '退出登录',
            key: 'logout',
        }
    ]
})

let isLogin = computed(() => {
    return (useCookie("token").value?.token)
})

let clickDropdown = (data: any) => {
    console.log(data);

    switch (data) {
        case 'add':
            location.href = "/admin/article/add"
            break;
        case 'admin':
            location.href = "/admin"
            break;
        case 'logout':
            useCookie("token").value = null
            location.reload()
            break;
        default:
            break;
    }

}
</script>
  
<style lang="scss" scoped>
.header {
    background-color: #fff;
    padding: 10px;

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 50px;
    }

    .nav {
        flex: 1;
    }

    .user {

        // width: 130px;
        a {
            padding-left: 10px;
            color: #606266;
        }

        a:hover {
            color: #e8e8e8;
        }
    }

    .user-login {
        padding-left: 10px;
    }

    .dropdown-menu {
        min-width: auto;
    }
}
</style>