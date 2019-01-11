<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag" @click.stop>
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="prompt">提示</p>
          <p class="text">{{confirmText}}</p>
          <div class="wechat" v-if="showWechat">
            <p class="weixin">微信号</p>
            <p class="number">{{num}}</p>
          </div>
          <div class="operate">
            <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
            <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    confirmText: {
      type: String,
      default: ''
    },
    num: {
      type: String,
      default: 'XXXXXX'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    showWechat: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    cancel () {
      this.hide()
      this.$emit('cancel')
    },
    confirm () {
      this.hide()
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.confirm
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  z-index: 998
  background-color: $color-background-d
  &.confirm-fade-enter-active
    animation: confirm-fadein 0.3s
    .confirm-content
      animation: confirm-zoom 0.3s
  .confirm-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 999
    .confirm-content
      width: 550px
      border-radius: 24px
      background-color: $color-text
      color: $color-text-b
      .prompt
        padding-top: 40px
        font-size: $font-size-34
        text-align: center
        font-weight: bold
      .text
        padding: 30px 64px 0 64px
        font-size: $font-size-30
        line-height: 40px
        text-align: center
      .wechat
        text-align: center
        .weixin
          padding-top: 30px
          font-size: $font-size-28
          color: $color-text-l
        .number
          padding-top: 20px
          font-size: $font-size-28
          color: $color-theme
      .operate
        display: flex
        margin-top: 40px
        justify-content: space-between
        border-top: 1px solid #ccc
        .operate-btn
          width: 50%
          text-align: center
          line-height: 76px
          font-size: $font-size-30
          color: $color-theme
          &.left
            color: $color-text-l
@keyframes confirm-fadein
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes confirm-zoom
  0%
    transform: scale(0)
  50%
    transform: scale(1.1)
  100%
    transform: scale(1)
</style>
