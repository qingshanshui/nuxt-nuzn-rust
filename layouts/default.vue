
<template>
    <div>
        <Appheader />
        <div class="container">
            <div class="main">
                <div class="content">
                    <NScrollbar style="height: calc(100vh - 210px)">
                        <slot />
                    </NScrollbar>
                </div>
                <div class="aside hidden-xs">
                    <Appaside />
                </div>
            </div>
        </div>
        <Appfooter />
    </div>
</template>
<script setup lang="ts">
import { NScrollbar } from 'naive-ui'

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