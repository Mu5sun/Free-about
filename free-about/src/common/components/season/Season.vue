<template>
  <div class="season-wrapper">
    <div class="season">
      <div class="img-box">
        <img class="season-img" :src="seasonImg">
      </div>
      <div class="introduction">
        <div class="season-name">{{seasonName}}</div>
        <div class="difficult">
          难度
          <i v-for="index in 5" :key="index" class="iconfont icon-xingxing" :class="filterGrate(index)"></i>
        </div>
        <div class="teacher">老师 {{teacher}}</div>
        <div class="term">{{day}}天</div>
        <div class="price">
          <div class="class-time">{{classTime}}课时 / ￥{{money}}</div>
          <div class="people">{{people}}人加入学习</div>
        </div>
        <div class="class-sign personal"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seasonImg: {
      type: String,
      default: 'http://img.duoziwang.com/2018/06/201712310484901.jpg'
    },
    seasonName: {
      type: String,
      default: '古筝培训'
    },
    grate: {
      type: Number,
      default: 3
    },
    teacher: {
      type: String,
      default: '王老师'
    },
    day: {
      type: Number,
      default: 180
    },
    classTime: {
      type: Number,
      default: 10
    },
    money: {
      type: Number,
      default: 3000
    },
    people: {
      type: Number,
      default: 100
    }
  },
  methods: {
    filterGrate(num) {
      if (num <= this.grate) {
        return 'active'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'

.season-wrapper
  margin-top: 30px
  padding: 0 30px
  .season
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
