<template>
  <div class="about-class">
    <week></week>
    <div class="wrapper">
      <scroll class="scroll" :data="classList">
        <season :classList="classList" :hasClass="hasClass" @selectType="selectType"></season>
      </scroll>
    </div>
    <confirm ref="confirm" :confirmText="text()" :confirmBtnText="btnText()" :showWechat="false"></confirm>
  </div>
</template>

<script>
import Week from '@/page/about-class/components/week'
import Scroll from '@/common/components/scroll/scroll'
import Season from '@/common/components/season/Season'
import Confirm from '@/common/components/confirm/confirm'
import axios from 'axios'

export default {
  data () {
    return {
      classList: [],
      hasClass: true,
      confirmText: [
        {
          text: '取消预约后，课时会自动返还给你。离开课时间六小时之前可随时取消预约。',
          btnText: '取消预约'
        },
        {
          text: '预约成功后，课时会自动减一，请及时前往上课。离开课时间六小时之前可随时取消预约。',
          btnText: '确认预约'
        },
        {
          text: '当前预约人数已满，点击排队后，有空位时会按排队顺序往前填补空位',
          btnText: '确认排队'
        },
      ],
      type: ''
    }
  },
  created () {
    this._getClassData()
  },
  methods: {
    selectType (value) {
      this.$refs.confirm.show()
      this.type = value
    },
    text () {
      if (this.type === '预约') {
        return this.confirmText[1].text
      } else if (this.type === '取消预约') {
        return this.confirmText[0].text
      } else if (this.type === '排队') {
        return this.confirmText[2].text
      }
    },
    btnText () {
       if (this.type === '预约') {
        return this.confirmText[1].btnText
      } else if (this.type === '取消预约') {
        return this.confirmText[0].btnText
      } else if (this.type === '排队') {
        return this.confirmText[2].btnText
      }
    },
    _getClassData () {
      axios.get('/season/reservation').then(res => {
        const data = res.data
        if (data.code === 0) {
          this.classList = data.data.classList
          this.hasClass = data.data.hasClass
        }
      })
    }
  },
  components: {
    Week,
    Scroll,
    Season,
    Confirm
  }
}
</script>

<style lang="stylus" scoped>
.about-class
  position: fixed
  top: 88px
  bottom: 104px
  z-index: 100
  width: 100%
  .wrapper
    position: absolute
    top: 152px
    bottom: 0
    .scroll
      height: 100%
      overflow: hidden



</style>
