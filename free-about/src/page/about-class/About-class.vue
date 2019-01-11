<template>
  <div class="about-class">
    <week @changeDate="changeDate"></week>
    <div class="wrapper">
      <scroll class="scroll" :data="classList">
        <season
          :classList="classList"
          :hasClass="hasClass"
          @selectCancel="selectCancel"
          @selectReserve="selectReserve"
          @selectQueue="selectQueue"
          @selectCancelQueue="selectCancelQueue"
        ></season>
      </scroll>
    </div>
    <confirm
      ref="confirm"
      :confirmText="text('text')"
      :confirmBtnText="text('btnText')"
      :showWechat="false"
      @confirm="confirm"
    ></confirm>
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
          text: '当前预约人数已满，点击排队后，有空位时会按排队顺序往前填补空位。',
          btnText: '确认排队'
        },
        {
          text: '取消排队后，当有空位出现时将不会有机会填补该空位。',
          btnText: '取消排队'
        },
      ],
      type: '',
      queue: false,
      isClick: false
    }
  },
  created () {
    this._getClassData()
  },
  methods: {
    selectCancel (item) {
      this.type = '取消预约'
      this._showConfirm()
      if (this.isClick) {
        item.isReser = false
      }
    },
    selectReserve (item) {
      this.type = '预约'
      this._showConfirm()
    },
    selectQueue (item) {
      this.type = '排队'
      this._showConfirm()
    },
    selectCancelQueue (item) {
      this.type = '取消排队'
      this._showConfirm()
    },
    text (value) {
      if (this.type === '预约') {
        return this.confirmText[1][value]
      } else if (this.type === '取消预约') {
        return this.confirmText[0][value]
      } else if (this.type === '排队') {
        return this.confirmText[2][value]
      } else if (this.type === '取消排队') {
        return this.confirmText[3][value]
      }
    },
    changeDate (value) {
      console.log(value)
    },
    confirm () {
      this.isClick = true
    },
    _showConfirm () {
      this.$refs.confirm.show()
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
