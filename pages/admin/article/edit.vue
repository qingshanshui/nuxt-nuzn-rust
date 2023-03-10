<template>
    <div class="add">
        <div class="add-title">
            <NInput v-model:value="state.title" type="text" placeholder="文章标题" />
        </div>
        <div class="add-editor n">
            <div id="editor—wrapper">
                <div id="toolbar-container"><!-- 工具栏 --></div>
                <div id="editor-container" style="height: 300px;"><!-- 编辑器 --></div>
            </div>
        </div>
        <div class="add-button">
            <NButton type="primary" @click="handelButton">
                编辑文章
            </NButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NInput, NButton } from 'naive-ui'

const router = useRouter()
const route = useRoute()

console.log(route.query);


let state = reactive({
    content: null,
    title: null,
    articleUid: null,
})
onMounted(() => {
    const { createEditor, createToolbar } = window.wangEditor
    const editorConfig = {
        placeholder: 'Type here...',
        onChange(editor) {
            state.content = editor.getHtml()
            console.log(state.content);

            // 也可以同步到 <textarea>
        }
    }

    const editor = createEditor({
        selector: '#editor-container',
        html: route.query.content,
        config: editorConfig,
        mode: 'default', // or 'simple'
    })

    const toolbarConfig = {}

    const toolbar = createToolbar({
        editor,
        selector: '#toolbar-container',
        config: toolbarConfig,
        mode: 'default', // or 'simple'
    })
    state.title = route.query.title
    state.articleUid = route.query.articleUid

})

const handelButton = () => {
    console.log("提交", state);
    useHttp.post('/admin/article/edit', state).then((res: any) => {
        router.push('/admin/article/list')
    })
}
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
</script>

<style scoped>
.add {
    padding: 20px;
    background: #fff;
}
</style>