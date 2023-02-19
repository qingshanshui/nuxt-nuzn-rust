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
                <NButton quaternary>
                    登录
                </NButton>
                <NButton quaternary>
                    注册
                </NButton>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NInput, NButton } from 'naive-ui'

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
    }
}
</style>