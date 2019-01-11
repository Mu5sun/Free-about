<template>
  <ul class="season-wrapper" ref="wrapper">
    <li @click.stop="selectDetail(item.id)" class="season" v-for="item in classList" :key="item.id">
      <div class="box content-box">
        <div class="img-box">
          <img class="season-img" :src="item.classImg">
        </div>
        <div class="introduction">
          <div class="season-name">{{item.className}}</div>
          <div class="difficult">
            <div>
              难度
              <i v-for="index in 5" :key="index" class="iconfont icon-xingxing" :class="filterGrate(index, item.difficult)"></i>
            </div>
            <div v-if="hasClass" class="time">{{item.hasTime}}</div>
          </div>
          <div class="teacher">老师 {{item.teacher}}</div>
          <div class="term">{{item.day}}天</div>
          <div class="price">
            <div class="class-time">{{item.classTime}}课时 / ￥{{item.money}}</div>
            <div v-if="!hasClass" class="people">{{item.people}}人加入学习</div>
            <div
              v-else
              class="button"
              @click="select(isReser(item.isReser, item.classPeople, item.currentPeople))"
            >{{isReser(item.isReser, item.classPeople, item.currentPeople)}}</div>
          </div>
          <div class="class-sign" :class="changeType(item.type)"></div>
        </div>
      </div>
      <div class="box people-box" v-if="hasClass">
        <div class="text-box">
          <p>他们也来参加这节课</p>
          <p>已有<span>{{item.currentPeople}}</span>/{{item.classPeople}}人预约</p>
        </div>
        <div class="avatar-box">
          <ul>
            <li class="avatar" v-for="(item, index) in item.propleList" :key="index">
              <img :src="item" class="ava">
            </li>
          </ul>
          <div class="more">
            <i class="iconfont icon-diandiandian"></i>
          </div>
        </div>
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
    },
    hasClass: {
      type: Boolean,
      default: false
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
      this.$emit('selectDetail', id)
    },
    select (value) {
      this.$emit('selectType', value)
    },
    isReser (isReser, num, count) {
      if (isReser) {
        return "取消预约"
      } else {
        if (count >= num) {
          return "排队"
        } else {
          return "预约"
        }
        'rotate(' + num + 'deg)'
        `rotate(${num}deg)`
      }
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
    padding-top: 30px
    .box
      position: relative
      width: 100%
      border-radius: 14px
      background-color: $color-text
      box-shadow: 0px 10px 30px 0px rgba(4,0,0,0.05)
    .content-box
      display: flex 
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
          display: flex
          justify-content: space-between
          font-size: $font-size-26
          margin-bottom: 20px
          color: $color-text-l
          .icon-xingxing
            color: #cccccc
          .active
            color: #FA0A0A
          .time
            font-size: $font-size-22
            color: $color-theme
        .teacher
          font-size: $font-size-24
          margin-bottom: 8px
          color: $color-text-ll
        .term
          font-size: $font-size-22
          color: #FA0A0A
          text-align: right
          font-weight: bold
        .price
          display: flex
          height: 60px
          line-height: 60px
          margin-bottom: 20px
          justify-content: space-between
          align-items: center
          .class-time
            font-size: $font-size-26
            color: $color-theme
          .people
            font-size: $font-size-18
            color: $color-text-ll
          .button
            padding: 0 35px
            border-radius: 30px
            font-size: $font-size-26
            color: $color-text
            background-color: $color-theme
      .class-sign
        position: absolute
        width: 79px
        height: 59px
        top: 20px
        right: -13px
        &.group
          bg-image('group')
        &.personal
          bg-image('personal')
    .people-box
      position: relative
      margin-top: 20px
      height: 168px
      color: $color-text-l
      box-sizing: border-box
      padding: 30px 30px 0 20px
      &::before
        content: ''
        position: absolute
        top: -28px
        margin-left: 596px
        border: 14px solid transparent
        border-bottom-color: $color-text
      .text-box
        display: flex
        justify-content: space-between
        font-size: $font-size-20
        span
          color: $color-theme
      .avatar-box
        display: flex
        justify-content: space-between
        padding: 20px 0
        ul
          display: flex
          justify-content: space-between
          .avatar
            width: 70px
            height: 70px
            border-radius: 50%
            overflow: hidden
            margin-right: 24px
            .ava
              width: 100%
              height: 100%
        .more
          text-align: center
          padding: 0 13px 0 10px
          line-height: 70px
          .icon-diandiandian
            font-size: 54px

      
</style>
