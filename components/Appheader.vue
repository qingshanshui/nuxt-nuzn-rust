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
            <div class="user ">
                <a href="/auth/login">
                    登录
                </a>
                <a href="/auth/register">
                    注册
                </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui'

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
}
</style>