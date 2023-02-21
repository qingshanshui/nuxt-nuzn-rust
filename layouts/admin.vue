
<template>
    <div>
        <Appheader />
        <div class="container">
            <div class="main">
                <div class="aside hidden-xs">
                    <Adminsidebar />
                </div>
                <div class="content">
                    <NScrollbar style="height: calc(100vh - 210px)">
                        <slot />
                    </NScrollbar>
                </div>
            </div>
        </div>
        <Appfooter />
    </div>
</template>
<script setup lang="ts">
import { NScrollbar } from 'naive-ui'
useHead(() => ({
    link: [
        { rel: 'stylesheet', href: "https://pan.nuzn.cn/v1/download?path=/wangeditor/5.1.23/css/style.css" }
    ],
    script: [
        { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/wangeditor/5.1.23/js/index.js' },
    ],
}))
</script>
<style scoped>
.main {
    display: flex;
}

.content {
    flex: 1;
    padding: 10px 0;
}

.aside {
    width: 230px;
    padding: 10px;
}
</style>