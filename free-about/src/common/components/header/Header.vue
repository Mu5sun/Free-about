<template>
  <div class="header">
    <div class="more">
      <i class="back-icon"></i>
    </div>
    <div class="text">课程</div>
    <div class="more"></div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  @import "~stylus/variable"

  .header
    display: flex
    width: 100%
    height: 44px
    background-color: $color-text
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1)
    .more
      box-sizing: border-box
      width: 35px
      height: 100%
      .back-icon
        diaplay: inline-block
        width: 9px
        height: 15px
        margin-left: 15px
    .text
      flex: 1
      text-align: center
      line-height: 44px
      font-size: $font-size-36
      color: $color-text-b

</style>
