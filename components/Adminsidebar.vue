<template>
    <div class="n">
        <NMenu :options="menuOptions" accordion default-value="userinfo" :on-update-value="onUpdatedMenu" />
    </div>
</template>


<script setup lang="ts" >
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
const router = useRouter();

const onUpdatedMenu = (value: any) => {
    router.push(value)
}
const menuOptions: MenuOption[] = [
    {
        label: '个人资料',
        key: '/admin',
    },
    {
        label: '发文章',
        key: '/admin/article/add',
    },
    {
        label: '文章列表',
        key: '/admin/article/list',
    }
]
</script>

<style scoped></style>