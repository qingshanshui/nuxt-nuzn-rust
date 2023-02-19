
<template>
    <div>
        <Appheader />
        <div class="container">
            <div class="main">
                <div class="content">
                    <slot />
                </div>
                <div class="aside hidden-xs">
                    <Appaside />
                </div>
            </div>
        </div>
        <Appfooter />
    </div>
</template>

<style scoped>
.main {
    display: flex;
}

.content {
    flex: 1;
    padding: 10px;
}

.aside {
    width: 230px;
    padding: 10px;
}
</style>