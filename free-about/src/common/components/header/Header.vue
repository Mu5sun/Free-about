<template>
  <div class="header">
    <div class="more" v-if="back">
      <i class="back-icon"></i>
    </div>
    <div class="text">{{title}}</div>
    <div class="more" v-if="right"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: '课程'
    },
    back: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.header
  display: flex
  width: 100%
  height: 88px
  background-color: $color-text
  border-bottom: 1px solid rgba(0, 0, 0, 0.3)
  .more
    box-sizing: border-box
    width: 70px
    height: 100%
    background: #ddd
    .back-icon
      diaplay: inline-block
      width: 18px
      height: 30px
      margin-left: 30px
  .text
    flex: 1
    text-align: center
    line-height: 88px
    font-size: $font-size-36
    color: $color-text-b
</style>
