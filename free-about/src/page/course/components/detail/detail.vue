<template>
  <transition name="slide">
    <div class="detail">
      <m-header :title="detail.className"></m-header>
      <div class="wrapper">
        <scroll :data="detail.detailList" class="scroll-detail">
          <detail-content :detail="detail"></detail-content>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import MHeader from '@/common/components/header/Header'
import DetailContent from '@/page/course/components/detail/detail-content'
import Scroll from '@/common/components/scroll/scroll'


export default {
  name: "Detail",
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this._getDetailData()
  },
  methods: {
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
    Scroll
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
