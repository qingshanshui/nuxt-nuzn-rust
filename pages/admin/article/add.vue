<template>
    <div class="n">
        <div id="editor—wrapper" style="min-height: 500px;">
            <div id="toolbar-container"><!-- 工具栏 --></div>
            <div id="editor-container"><!-- 编辑器 --></div>
        </div>
    </div>
</template>
<script setup lang="ts">
onMounted(() => {
    const { createEditor, createToolbar } = window.wangEditor
    const editorConfig = {
        placeholder: 'Type here...',
        onChange(editor) {
            const html = editor.getHtml()
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

definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
</script>