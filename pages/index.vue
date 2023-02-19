<template>
    <div class="home">
        <div class="home-content">
            <HomeItem v-for="i in 10" :key="i" @click="handelRoute(i)"></HomeItem>
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
$fetch('/name', {
    method: "GET"
}).then(res => {
    console.log(res, "---");
})

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