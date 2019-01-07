<template>
  <div class="footer">
    <router-link tag='div' class="tab-item" to='/Course'>
      <div class="item-icon"></div>
      <div class="tab-link">课程</div>
    </router-link>
    <router-link tag='div' class="tab-item" to='/About-class'>
      <div class="item-icon"></div>
      <span class="tab-link">约课</span>
    </router-link>
    <router-link tag='div' class="tab-item" to='/Purchased'>
      <div class="item-icon"></div>
      <span class="tab-link">已购</span>
    </router-link>
    <router-link tag='div' class="tab-item" to='/Mine'>
      <div class="item-icon"></div>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import "~stylus/variable"
  @import "~stylus/mixin"

  .footer
    display: flex
    position: fixed
    bottom: 0
    width: 100%
    height: 52px
    font-size: $font-size-18
    background-color: $color-text
    border-top: 1px solid #999
    padding: 7px 0 5px 0
    box-sizing: border-box
    .tab-item
      display: flex
      flex-direction: column
      align-items: center
      flex: 1
      color: $color-text-f
      .item-icon
        bg-image('about-class')
        width: 20px
        flex: 0 0 20px
      .tab-link
        text-align: center
        margin-top: 5px
</style>
