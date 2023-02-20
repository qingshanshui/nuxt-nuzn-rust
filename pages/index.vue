<template>
    <div class="home">
        <div class="home-content">
            <HomeItem :item="item" v-for="(item, index) in data.data.result" :key="index"
                @click="handelRoute(item.article_uid)">
            </HomeItem>
        </div>
        <div class="home-content-pagination">
            <NPagination :page-count="101" :page-slot="5">
            </NPagination>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import { NPagination } from 'naive-ui'
import { useRouter } from "#app"

const router = useRouter()
const { data } = await useAsyncData('list', () => $fetch('https://rust.nuzn.cn/api/v1/article?size=10&page=1', {
    method: "GET"
}))

const handelRoute = (id: any) => {
    router.push(`articles/${id}`)
}
</script>


<style scoped lang="scss">
.home {
    background-color: #fff;
    padding: 10px;
    color: rgba(0, 0, 0, 0.45);

    .home-content-pagination {
        margin: 10px;
        display: flex;
        justify-content: center;
    }
}
</style>