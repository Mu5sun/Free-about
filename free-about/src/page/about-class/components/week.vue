<template>
  <div class="week">
    <div class="time-bar">
      <ul class="wrapper">
        <li class="point" v-for="(item, index) in weekArray" :key="index" :class="{active: isToday(index)}">
          <p class="date">{{day(index)}}</p>
          <p v-show="isToday(index)" class="weekday">周{{weekday}}</p>
        </li>
      </ul>
    </div>
    <div class="time-line"></div>
  </div>
</template>

<script>
const AVERAGE = 'average'  //平年
const LEAP = 'leap' //闰年

export default {
  data () {
    return {
      weekArray: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  methods: {
    day (index) {
      // 获取今天周几
      let today = new Date().getDay()
      // 获取今年是哪年
      let year = new Date().getFullYear()
      // 获取当前哪个月，需要加一
      let month = new Date().getMonth() + 1
      // 获取今天的日期
      let day = new Date().getDate()
      // 比对今天前面还有
      let num = index - today
      // 判断当前月份的天数
      let days = this._judgeDays(year, month)
      // 计算时间的日期是在昨天之前还是在明天之后
      day = day + num
      // 当num=0 也就是当天
      if (num === 0) {
        return this._date(month, day)
      // 当num > 0 也就是明天之后
      } else if (num > 0) {
        // 当大于0   表示时间是大于当前月份的天数的
        if (day - days > 0) {
          // 相减得出正确的日期
          day = day - days
          // 函数得出正确的年和月，后面需要使用
          date = this._judgeMonth(year, ++month)
          year = date.year
          month = date.month
        }
      // 最后就是num < 0 的情况 也就是昨天
      } else {
        // 当小于等于0的时候，  表示时间是负数
        if (day <= 0) {
          // 函数得出正确的年和月，后面需要使用
          date = this._judgeMonth(year, --month)
          year = date.year
          month = date.month
          // 函数计算出正确的日期
          day = this._judgeDay(year, month, day)
        }
      }
      return this._date(month, day)
    },
    isToday (index) {
      let today = new Date().getDay()
      if (today === index) {
        return true
      } else {
        return false
      }
    },
    _paddingZero (num) {
      if (num < 10) {
        return `0${num}`
      } else {
        return num
      }
    },
    _date (month, day) {
      return `${this._paddingZero(month)}.${this._paddingZero(day)}`
    },
    _judgeDays (year, month) {
      let day = new Date(year, month, 0);
      return day.getDate()
    },
    _judgeMonth (year, month) {
      if (month > 12) {
        year++
        month = 1
        return {
          year,
          month
        }
      } else if (month <= 0) {
        year--
        month = 12
        return {
          year,
          month
        }
      } else {
        return month
      }
    },
    _judgeDay (year, month, day) {
      return this._judgeDays(year, month) + day
    }
  },
  computed: {
    weekday () {
      let weekday = new Date().getDay()
      return this.weekArray[weekday]
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
    box-sizing: border-box
    padding: 40px 0
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
      justify-content: space-evenly
      align-items: center
      &::before
        content: ''
        position: absolute
        left: 0
        right: 0
        height: 2px
        top: 24px
        background-color: $color-button-background
      .point
        position: relative
        width: 10px
        height: 10px
        background-color: $color-theme
        border-radius: 50%
        font-size: $font-size-20
        color: $color-text-l
        margin-bottom: 22px
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
