<template>
    <div class="home">
        <div class="home-content">
            <HomeItem :item="item" v-for="(item, index) in homeList.data.result" :key="index">
            </HomeItem>
        </div>
        <div class="home-content-pagination">
            <NPagination :item-count="homeList.data.total" :default-page="Number($route.query.page) || 1" :page-slot="5"
                :on-update-page="updateChange" :page-sizes="[16]">
            </NPagination>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import { NPagination } from 'naive-ui'
const route = useRoute()

let { data: homeList } = await useAsyncData((pagesize) => $fetch(`https://rust.nuzn.cn/api/v1/article?size=16&page=${route.query.page}`, {
    method: "GET"
}))

const updateChange = (page) => {
    location.href = `?page=${page}`
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