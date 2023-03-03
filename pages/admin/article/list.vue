<template>
    <div class="n">
        <NDataTable :bordered="false" :single-line="false" :columns="state.columns" :data="state.data"
            :pagination="state.pagination" />
    </div>
</template>
<script setup lang="ts">
import { NDataTable } from 'naive-ui'
const route = useRoute()
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})

onMounted(() => {
    list()
})


const list = () => {
    $fetch(`/v1/rust/api/admin/article/list`, {
        method: "POST",
        baseURL: utils.getBaseUrl(),
        body: {
            "size": 16,
            "page": route.query.page
        },
        headers: {
            'Authorization': useCookie("token").value.token
        }
    }).then((res) => {
        console.log(res, '---');
    })
}

let state = reactive({
    columns: [
        {
            title: '文章名称',
            key: 'name'
        },
        {
            title: '查看数量',
            key: 'age'
        },
        {
            title: '操作',
            key: 'address'
        }
    ],
    data: [
        {
            key: 0,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer']
        },
        {
            key: 1,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['wow']
        },
        {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher']
        }
    ],
    pagination: {
        pageSize: 10
    }
})
</script>