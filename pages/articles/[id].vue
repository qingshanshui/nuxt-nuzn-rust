<template>
    <article class="article">
        <h2 class="title"> {{ $route.params.id }}</h2>
        <div class="other-info">
            <p>
                <span class="author">
                    {{ 'admin' }}
                </span>
                <time class="time m-l-5px keep-all">
                    {{ '10天前' }}
                </time>
            </p>
            <p>
                <span class="text m-l-10px">分类：</span>
                <span class="classify"> 解决问题 </span>
                <span class="m-l-5px">
                    12245
                </span>
                <span class="m-l-5px">
                    留言
                </span>
            </p>
        </div>
        <div ref="articleContent" class="content-details" v-html="$route.params.id"></div>
    </article>
</template>


<style scoped lang="scss">
.article {
    background-color: #fff;

    .title {
        padding: 10px 0;
        font-size: 20px;
        text-align: center;
    }

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

        .m-l-5px {
            margin-left: 5px;
        }

        .m-l-10px {
            margin-left: 10px;
        }

        .iconfont {
            vertical-align: baseline;
        }
    }
}
</style>