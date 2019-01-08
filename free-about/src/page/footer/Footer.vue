<template>
  <div class="footer">
    <router-link @click.native="changeTab(0)" tag='div' class="tab-item" to='/Course'>
      <div class="item-icon">
        <i class="iconfont icon-icon"></i>
      </div>
      <span class="tab-link">课程</span>
    </router-link>
    <router-link @click.native="changeTab(1)" tag='div' class="tab-item" to='/About-class'>
      <div class="item-icon">
        <i class="iconfont icon-kecheng"></i>
      </div>
      <span class="tab-link">约课</span>
    </router-link>
    <router-link @click.native="changeTab(2)" tag='div' class="tab-item" to='/Purchased'>
      <div class="item-icon">
        <i class="iconfont icon-yigou"></i>
      </div>
      <span class="tab-link">已购</span>
    </router-link>
    <router-link @click.native="changeTab(3)" tag='div' class="tab-item" to='/Mine'>
      <div class="item-icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: ['课程', '约课', '已购', '我的']
    }
  },
  methods: {
    changeTab (num) {
      this.$emit('changeTab', this.tab[num])
    }
  }
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
    height: 104px
    font-size: $font-size-18
    background-color: $color-text
    border-top: 1px solid #999
    padding: 14px 0 10px 0
    box-sizing: border-box
    .tab-item
      display: flex
      flex-direction: column
      align-items: center
      flex: 1
      color: $color-text-f
      .item-icon
        width: 40px
        flex: 0 0 40px
        .iconfont
          font-size: $font-size-40
      .tab-link
        text-align: center
        margin-top: 10px
      &.router-link-active
        color: $color-theme
</style>
