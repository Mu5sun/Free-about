<template>
  <transition name="slide">
    <div class="detail">
      <m-header :title="detail.className" @beBack="beBack" :back="true"></m-header>
      <div class="wrapper">
        <scroll :data="detail.detailList" class="scroll-detail">
          <detail-content :detail="detail"></detail-content>
        </scroll>
      </div>
      <detail-footer @select="selectItem" :money="detail.money" :is-buy="detail.isBuy"></detail-footer>
      <confirm ref="confirm" :confirmText="text" confirmBtnText="确认报名"></confirm>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import MHeader from '@/common/components/header/Header'
import DetailContent from '@/page/course/components/detail/detail-content'
import DetailFooter from '@/page/course/components/detail/detail-footer'
import Scroll from '@/common/components/scroll/scroll'
import Confirm from '@/common/components/confirm/confirm'

export default {
  data () {
    return {
      detail: {},
      text: '因支付业务还未完善的原因，确认报名后，请联系老师的微信进行报名缴费事宜',
      number: 'weixinhaoma123'
    }
  },
  created () {
    this._getDetailData()
  },
  methods: {
    beBack () {
      this.$router.push('/Course')
    },
    selectItem () {
      this.$refs.confirm.show()
    },
    hide () {
      this.$refs.confirm.hide()
    },
    _getDetailData () {
      if (!this.classId) {
        this.$router.push('/Course')
        return
      }
      axios.get(`/season/course/${this.classId}`).then((res) => {
        console.log(res)
        const data = res.data
        if (data.code === 0) {
          this.detail = data.data
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'classId'
    ])
  },
  components: {
    MHeader,
    DetailContent,
    Scroll,
    DetailFooter,
    Confirm
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.detail
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: $color-background
  &.slide-enter-active,
  &.slide-leave-active
    transition: all 0.3s
  &.slide-enter,
  &.slide-leave-to
    transform: translate3d(100%, 0, 0)
  .wrapper
    position: fixed
    top: 88px
    bottom: 104px
    width: 100%
    .scroll-detail
      height: 100%
      overflow: hidden
</style>
