<template>
  <div class="container">
    <div class="header">
      <p>
        <i :class="props.icon"></i>
        <span>{{ props.title }}</span>
      </p>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  icon: {
    type: String,
    required: true,
    default: "",
  },
})

</script>

<style lang="scss" scoped>
.container {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background: #ffffff;

  &:first-of-type {
    margin-top: 0;
  }

  .header {
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e9eaed;

    p {
      position: relative;
      display: inline-block;

      .iconfont {
        font-size: 16px;
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #409eff;
      }
    }
  }
}
</style>
