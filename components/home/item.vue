<template>
    <div class="home-item">
        <div class="home-item-img">
            <img src="https://rust.nuzn.cn/logo.jpg" alt="rust">
        </div>
        <div class="home-item-title">
            rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三rust核心库第三
        </div>
        <div class="home-item-datetime">10月前</div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.home-item {
    padding: 5px;
    transition: all .3s ease 0s;
    margin-top: 2px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    .home-item-img {
        width: 60px;
    }

    .home-item-title {
        flex: 1;
        margin: 0 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        opacity: 0.7;
    }
}

.home-item:hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: #84858d2e;
}
</style>