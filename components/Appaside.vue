<template>
    <aside>
        <AsideItem title="公告" icon="AccessibilitySharp">
            Rust语言中文网，中国 Rust 社区，致力于构建完善的 Rust
            中文社区，Rust语言爱好者的学习家园。
        </AsideItem>
        <AsideItem title="站点统计" icon="el-icon-edit-outline">
            <ul class="content">
                <li class="list">会员：72316位</li>
                <li class="list">文章：2篇</li>
                <li class="list">评论：5条</li>
                <li class="list">最后更新：刚刚</li>
            </ul>
        </AsideItem>
    </aside>
</template>


<style scoped lang="scss">
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 12px;

    ul {
        padding: 0;
    }
}

.list {
    margin-top: 10px;
    list-style: none;
    padding: 0;

    &:nth-of-type(odd) {
        width: 50%;
    }

    &:nth-of-type(even) {
        width: 48%;
    }

}
</style>