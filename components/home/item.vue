<template>
    <a :href="`articles/${props.item.articleUid}`">
        <div class="home-item">
            <div class="home-item-img">
                <img src="https://pan.nuzn.cn/v1/download?path=/image/rust.jpg" alt="rust">
            </div>
            <div class="home-item-title">
                {{ props.item.title }}
            </div>
            <div class="home-item-datetime">{{ moment(props.item.CreatedAt).format("YYYY-MM-DD") }}</div>
        </div>
    </a>
</template>
<script setup lang="ts">
import moment from 'moment'
// props
const props = defineProps({
    item: {
        type: Object,
        default: {},
    },

})
</script>
<style scoped lang="scss">
.home-item {
    color: rgba(0, 0, 0, 0.45);
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
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #000000;
        font-weight: 500;
    }
}

.home-item:hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: #84858d2e;
}
</style>