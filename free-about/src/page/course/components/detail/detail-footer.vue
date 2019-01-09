<template>
  <div class="footer">
    <div class="left-box">
      <div class="share">
        <div class="share-text">
        </div>
      </div>
      <div class="line"></div>
      <div class="advisory">免费咨询</div>
    </div>
    <div class="right">
      <div class="button">报名：{{money}}</div>
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
  justify-content: space-between
  background-color: $color-text
  border-top: 1px solid #999
  .left-box
    display: flex
    flex: 1
  .right
    width: 340px
    height: 104px
    background: #000
</style>
