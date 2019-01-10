<template>
  <div class="header">
    <div class="more" v-if="back" @click="beBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="text">{{title}}</div>
    <div class="more" v-if="right"></div>
  </div>
</template>

<script>
export default {
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
  },
  methods: {
    beBack () {
      this.$emit('beBack')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.header
  position: fixed
  top: 0
  z-index: 99
  display: flex
  width: 100%
  height: 88px
  background-color: $color-text
  border-bottom: 1px solid rgba(0, 0, 0, 0.3)
  .more
    width: 70px
    height: 88px
    text-align: center
    line-height: 88px
    .icon-fanhui
      font-size: $font-size-30
      color: $color-text-b
  .text
    flex: 1
    text-align: center
    line-height: 88px
    font-size: $font-size-36
    color: $color-text-b
</style>
