<template>
  <ul class="season-wrapper" ref="wrapper">
    <li @click="selectDetail(item.id)" class="season" v-for="item in classList" :key="item.id">
      <div class="img-box">
        <img class="season-img" :src="item.classImg">
      </div>
      <div class="introduction">
        <div class="season-name">{{item.className}}</div>
        <div class="difficult">
          难度
          <i v-for="index in 5" :key="index" class="iconfont icon-xingxing" :class="filterGrate(index, item.difficult)"></i>
        </div>
        <div class="teacher">老师 {{item.teacher}}</div>
        <div class="term">{{item.day}}天</div>
        <div class="price">
          <div class="class-time">{{item.classTime}}课时 / ￥{{item.money}}</div>
          <div class="people">{{item.people}}人加入学习</div>
        </div>
        <div class="class-sign" :class="changeType(item.type)"></div>
      </div>
    </li>
  </ul>
</template>

<script>
const PERSONAL = 1
const GROUP = 2

export default {
  props: {
    classList: {
      type: Array,
      default: []
    }
  },
  methods: {
    filterGrate (num, grate) {
      if (num <= grate) {
        return 'active'
      }
    },
    changeType (num) {
      if (num === PERSONAL) {
        return 'personal'
      } else if (num === GROUP) {
        return 'group'
      }
    },
    selectDetail (id) {
      this.$emit("selectDetail", id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'

.season-wrapper
  padding: 0 30px
  .season
    margin-top: 30px
    display: flex
    position: relative
    width: 100%
    border-radius: 14px
    background-color: $color-text
    .img-box
      display:flex
      align-items:center
      justify-content:center
      width: 200px
      height: 260px
      background: #888
      border-top-left-radius: 14px
      border-bottom-left-radius: 14px
      overflow: hidden
      .season-img
        height: 100%
    .introduction
      flex: 1
      padding: 30px 30px 0 34px
      .season-name
        font-size: $font-size-30
        margin-bottom: 20px
        color: $color-text-b
      .difficult
        font-size: $font-size-26
        margin-bottom: 20px
        color: $color-text-l
        .icon-xingxing
          color: #cccccc
        .active
          color: #FA0A0A
      .teacher
        font-size: $font-size-24
        margin-bottom: 8px
        color: $color-text-ll
      .term
        font-size: $font-size-22
        margin-bottom: 28px
        color: #FA0A0A
        text-align: right
        font-weight: bold
      .price
        display: flex
        justify-content: space-between
        .class-time
          font-size: $font-size-26
          color: $color-theme
        .people
          font-size: $font-size-18
          color: $color-text-ll
    .class-sign
      position: absolute
      width: 79px
      height: 59px
      top: 20px
      right: -13px
    .group
      bg-image('group')
    .personal
      bg-image('personal')
</style>
