<template>
    <div class="n">
        <NDataTable :bordered="false" :columns="state.columns" :data="state.data" :pagination="state.pagination" />
    </div>
</template>
<script setup lang="ts">
import { NDataTable, NButton } from 'naive-ui'
const route = useRoute()
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})

onMounted(() => {
    list()
})

const list = () => {
    useHttp.post('/admin/article/list', {
        "size": 16,
        "page": route.query.page
    }).then((res: any) => {
        state.data = res.data.data
    })
}

let state = reactive({
    columns: [
        {
            title: '文章名称',
            key: 'title'
        },
        {
            title: '查看数量',
            key: 'hot'
        },
        {
            title: '操作',
            width: 1,
            titleColSpan: 2,
            render(row) {
                return h(
                    NButton,
                    {
                        strong: true,
                        size: 'small',
                        type: "primary",
                        onClick: () => edit(row),
                    },
                    { default: () => '编辑' },
                )
            }
        },
        {
            title: '',
            width: 1,
            render(row) {
                return h(
                    NButton,
                    {
                        strong: true,
                        size: 'small',
                        type: "error",
                        onClick: () => del(row),
                    },
                    { default: () => '删除' },
                )
            }
        },
    ],
    data: [
    ],
    pagination: {
        pageSize: 10
    }
})

// 编辑文章
const edit = (row: any) => {
    console.log(row);
}

// 删除文章
const del = (row: any) => {
    useHttp.post('/admin/article/del', { id: row.articleUid }).then((res: any) => {
        list()
    })
}
</script>