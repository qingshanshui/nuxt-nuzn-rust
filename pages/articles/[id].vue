<template>
    <article class="article">
        <h2 class="title">
            {{ article.data.title }}
        </h2>
        <div class="other-info">
            <span>
                {{ 'admin' }}
            </span>
            <time>
                {{ '10天前' }}
            </time>
            <span>
                12245
            </span>
            <span>
                留言
            </span>
        </div>
        <div ref="articleContent" class="content-details" v-html="article.data.content">

        </div>
    </article>

    <!-- 留言列表 -->
    <div class="comment-list">
        <h3 class="title">{{ `共 ${0} 条评论` }}</h3>
        <ul>
            <li v-for="(item, index) in commentList.data.result" :key="index">
                <div class="image">
                    <img src="https://pan.nuzn.cn/v1/download?path=/image/rust.jpg" alt="" srcset="">
                </div>
                <div class="content">
                    <div class="content-info">
                        <span class="content-info-title">{{ item.user.nick_name }}</span>
                        <span>5天之前 </span>
                        <span> {{ item.UpdatedAt }}</span>
                    </div>
                    <div class="content-c" v-html="item.content">

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
// 详情
const { data: article } = await useAsyncData('article', () => $fetch(`https://rust.nuzn.cn/api/v1/article/${route.params.id}`, {
    method: "GET"
}))
// 评论

const { data: commentList } = await useAsyncData('commentList', () => $fetch(`https://rust.nuzn.cn/api/v1/comment?articleID=${route.params.id}`, {
    method: "GET"
}))

console.log(article);


</script>

<style scoped lang="scss">
.comment-list {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    margin-top: 20px;

    .title {
        text-align: center;
    }

    ul {
        padding: 0;

        li {
            padding: 10px;
            display: flex;

            .image {
                width: 60px;
            }

            .content {
                flex: 1;

                .content-info {
                    color: rgba(0, 0, 0, 0.45);

                    .content-info-title {
                        font-size: 16px;
                        font-weight: 600;
                        margin-right: 5px;
                        color: #000;
                    }
                }
            }
        }
    }


}

.article {
    background-color: #fff;
    border-radius: 4px;

    .other-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);

        >span {
            margin-right: 5px;
        }
    }
}
</style>