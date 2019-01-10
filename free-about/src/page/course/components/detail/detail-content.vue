<template>
    <div class="container">
        <div class="top-box">
          <div class="imgbox">
            <img class="img" :src="detail.classImg">
          </div>
          <div class="title-box">
            <p class="title">{{detail.className}}</p>
            <div class="difficult">
              <span>难度</span>
              <i v-for="index in 5" :key="index" class="iconfont icon-xingxing" :class="filterGrate(index, detail.difficult)"></i>
            </div>
            <div class="day">
              <span>有效期</span>
              <span>{{detail.day}}天</span>
            </div>
          </div>
        </div>
        <div class="numberbox">
          <div class="number">
            <p class="num">
              <span>{{detail.classTime}}</span>课时
            </p>
            <p class="caption">总课时</p>
          </div>
          <div class="line"></div>
          <div class="number">
            <p class="num">
              <span>{{detail.people}}</span>人
            </p>
            <p class="caption">加入学习</p>
          </div>
        </div>
        <div class="article-container">
          <div class="article" v-for="(item, index) in detail.detailList" :key="index">
            <p class="article-name">{{item.title}}</p>
            <p class="article-content">{{item.content}}</p>
          </div>
        </div>
        <div class="article-container notice">
          <div class="article">
            <p class="article-name">报名须知</p>
            <p class="article-content">{{detail.notice}}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: {}
    }
  },
  methods: {
    filterGrate (num, grate) {
      if (num <= grate) {
        return 'active'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

  .container
    width: 100%
    .top-box
      position: relative
      width: 100%
      height: 440px
      overflow: hidden
      .imgbox
        width: 100%
        height: 440px
        display: flex
        justify-content: center
        align-items: center
        background: #000000
        .img
          width: 100%
          opacity: 0.8
      .title-box
        position: absolute
        left: 40px
        bottom: 30px
        color: $color-text
        .title
          font-size: $font-size-40
          font-weight: bold
          margin-bottom: 17px
        .difficult
          font-size: $font-size-26
          margin-bottom: 20px
          line-height: 30px
          .iconfont
            font-size: $font-size-30
            margin-left: 10px
          .icon-xingxing
            color: $color-text
          .active
            color: #FA0A0A
        .day
          font-size: $font-size-26
    .numberbox
      display: flex
      width: 100%
      height: 128px
      background: #f7f7ff
      padding: 34px 0
      box-sizing: border-box
      .number
        flex: 1
        text-align: center
        .num
          font-size: $font-size-22
          color: $color-text-b
          span
            font-size: $font-size-36
            font-weight: bolder
        .caption
          margin-top: 8px
          font-size: $font-size-20
          color: #7c7d7f
      .line
        width: 2px
        height: 60px
        background: #e3e3e3
    .article-container
      padding: 40px 40px 0 40px
      background-color: $color-text
      color: $color-text-b
      .article
        padding-bottom: 80px
        color: $color-text-b
        .article-name
          font-size: $font-size-34
          font-weight: bold
          margin-bottom: 40px
        .article-content
          font-size: $font-size-28
          line-height: 38px
    .notice
      margin-top: 20px
</style>
