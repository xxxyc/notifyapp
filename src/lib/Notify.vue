<template>
  <div class="vuenotify-body" :style="{backgroundColor: backgroundColor, zIndex: zIndex}">
    <div class="vuenotify-content">
      <div class="vuenotify-content-title">{{title}}</div>
      <div class="vuenotify-content-close" :style="{color: closeBtnColor}" @click="close">
        {{closeBtnText}}
      </div>
    </div>
    <div class="vuenotify-content-text">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    closeBtnText: String,
    closeBtnColor: String,
    backgroundColor: String,
    zIndex: Number
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  position: 0px;
}
.vuenotify-body {
  width: 95%;
  min-height: 68px;
  border: 1px solid #000;
  border-radius: 8px;
  position: absolute;
  top: 3px;
  left: 2.5%;
  padding: 10px 10px;
  overflow: hidden;
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;

  .vuenotify-content {
    max-width: 400px;
    margin: 0 auto;
    font-size: 16px;
    overflow: hidden;

    .vuenotify-content-title {
      width: 85%;
      font-weight: bolder;
      float: left;
    }
    
    .vuenotify-content-close {
      width: 15%;
      text-align: center;
      float: right;
    }
  }

  .vuenotify-content-text {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 8px;
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
