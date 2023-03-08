<template>
    <div class="add">
        <div class="add-title">
            <NInput v-model:value="state.title" type="text" placeholder="文章标题" />
        </div>
        <div class="add-editor n">
            <div id="editor—wrapper" style="min-height: 500px;">
                <div id="toolbar-container"><!-- 工具栏 --></div>
                <div id="editor-container"><!-- 编辑器 --></div>
            </div>
        </div>
        <div class="add-button">
            <NButton type="primary" @click="handelButton">
                发文章
            </NButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NInput, NButton } from 'naive-ui'

const router = useRouter()

let state = reactive({
    content: null,
    title: null
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
        html: '<p><br></p>',
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

})

const handelButton = () => {
    console.log("提交", state);
    useHttp.post('/admin/article/add', state).then((res: any) => {
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