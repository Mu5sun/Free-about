<template>
  <div class="course">
    <scroll class="course-scroll" ref="courseScroll" :data="classList">
      <div class="course-wrapper">
        <school-name :school="venueName" :address="venueAddress"></school-name>
        <season :classList="classList" @selectDetail="selectDetail" :hasClass="hasClass"></season>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import SchoolName from '@/page/course/components/School-name'
import Season from '@/common/components/season/Season'
import Scroll from '@/common/components/scroll/scroll'
import {mapMutations} from 'vuex'
import axios from 'axios'

export default {
  components: {
    SchoolName,
    Season,
    Scroll
  },
  data () {
    return {
      venueAddress: '',
      venueName: '',
      hasClass: false,
      classList: []
    }
  },
  created () {
    this._getCourseData()
  },
  methods: {
    selectDetail (id) {
      this.$router.push({
        path: `/Course/${id}`
      })
      this.setClassId(id)
    },
    _getCourseData () {
      axios.get('/season/course').then(res => {
        const data = res.data
        if (data.code === 0) {
          this.venueAddress = data.data.venueAddress
          this.venueName = data.data.venueName
          this.hasClass = data.data.hasClass
          this.classList = data.data.classList
        }
      })
    },
    ...mapMutations({
      setClassId: 'CLASS_ID'
    })
  }
}
</script>

<style lang="stylus" scoped>
.course
  position: fixed
  z-index: 100
  top: 88px
  bottom: 104px
  width: 100%
.course-scroll
  height: 100%
  overflow: hidden
</style>
