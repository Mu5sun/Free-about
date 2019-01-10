<template>
  <div class="footer">
    <div class="left-box">
      <div class="share">
        <div class="icon">
          <i class="iconfont icon-share"></i>
        </div>
        <span class="text">分享好友</span>
      </div>
      <div class="line"></div>
      <div class="advisory">免费咨询</div>
    </div>
    <div class="right" @click="selectItem">
      <div class="button">报名：￥{{money}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    money: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    selectItem () {
      this.$emit('select')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.footer
  position: fixed
  bottom: 0
  height: 104px
  width: 100%
  display: flex
  background-color: $color-text
  border-top: 1px solid rgba(0, 0, 0, 0.3)
  .left-box
    display: flex
    align-items: center
    flex: 1
    color: $color-text-b
    .share
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      flex: 1
      .icon
        .iconfont
          font-size: 50px
        .text
          font-size: $font-size-18
    .line
      width: 2px
      height: 38px
      background-color: #e4e4e4
    .advisory
      flex: 1
      text-align: center
      font-size: $font-size-28
  .right
    width: 322px
    height: 104px
    .button
      width: 304px
      height: 70px
      line-height: 70px
      text-align: center
      font-size: $font-size-30
      background-color: $color-theme
      color: $color-text
      border-radius: 35px
      margin: 17px 18px 0 0
</style>
