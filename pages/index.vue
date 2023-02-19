<template>
    <div class="home">
        <div class="home-content">
            <HomeItem v-for="i in 10" :key="i"></HomeItem>
        </div>
        <div class="home-content-pagination">
            <NPagination :page-count="101" :page-slot="7">
            </NPagination>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import { NPagination } from 'naive-ui'
$fetch('/name', {
    method: "GET"
}).then(res => {
    console.log(res, "---");
})

</script>


<style scoped lang="scss">
.home {
    background-color: #fff;
    padding: 10px;

    .home-content-pagination {
        margin: 10px;
    }
}
</style>