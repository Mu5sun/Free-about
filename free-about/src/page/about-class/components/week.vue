<template>
  <div class="week">
    <div class="time-bar">
      <ul class="wrapper">
        <li class="point" v-for="index in 7" :key="index">
          <p class="date">{{date}}</p>
          <p class="weekday">周{{weekday}}</p>
        </li>
      </ul>
    </div>
    <div class="time-line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weekArray: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  methods: {
    today () {
      let day = new Date().getDay()
    },
    paddingZero (num) {
      if (num < 10) {
        return `0${num}`
      } else {
        return num
      }
    }
  },
  computed: {
    weekday () {
      let weekday = new Date().getDay()
      return this.weekArray[weekday]
    },
    date () {
      let month = new Date().getMonth() + 1
      let day = new Date().getDate()
      return `${this.paddingZero(month)}.${this.paddingZero(day)}`
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.week
  position: relative
  width: 100%
  height: 152px
  background-color: $color-text
  .time-bar
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 2
    .wrapper
      position: relative
      width: 100%
      height: 100%
      display: flex
      justify-content: space-around
      align-items: center    
      &::before
        content: ''
        position: absolute
        left: 0
        right: 0
        height: 2px
        top: 50%
        transform: translateY(-50%)
        background-color: $color-button-background
      .point
        position: relative
        width: 10px
        height: 10px
        background-color: $color-theme
        border-radius: 50%
        font-size: $font-size-20
        color: $color-text-l
        &.active
          width: 110px
          height: 50px
          border-radius: 25px
          .date
            font-size: $font-size-28
            font-weight: bold
            color: $color-text
            line-height: 50px
        .date
          position: absolute
          line-height: 60px
          left: 50%
          transform: translateX(-50%)
        .weekday
          position: absolute
          top: 60px
          left: 50%
          transform: translateX(-50%)
</style>
