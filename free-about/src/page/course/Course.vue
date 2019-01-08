<template>
  <div class="course">
    <scroll class="course-scroll" ref="courseScroll" :data="classList">
      <div class="course-wrapper">
        <school-name :school="venueName" :address="venueAddress"></school-name>
        <season :classList="classList"></season>
      </div>
    </scroll>
  </div>
</template>

<script>
import SchoolName from '@/page/course/components/School-name'
import Season from '@/common/components/season/Season'
import Scroll from '@/common/components/scroll/scroll'
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
      classList: []
    }
  },
  created () {
    this._getCourseData()
  },
  methods: {
    _getCourseData () {
      axios.get('/season/course').then(res => {
        const data = res.data
        if (data.code === 0) {
          this.venueAddress = data.data.venueAddress
          this.venueName = data.data.venueName
          this.classList = data.data.classList
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.course
  position: fixed
  top: 88px
  bottom: 104px
  width: 100%
.course-scroll
  height: 100%
  overflow: hidden
</style>
