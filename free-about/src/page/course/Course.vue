<template>
  <div class="course">
    <m-header></m-header>
    <scroll class="course-content" :data="classList">
      <div>
        <school-name :school="venueName" :address="venueAddress"></school-name>
        <season :classList="classList"></season>
      </div>
    </scroll>
  </div>
</template>

<script>
import MHeader from '@/common/components/header/Header'
import SchoolName from '@/page/course/components/School-name'
import Season from '@/common/components/season/Season'
import Scroll from '@/common/components/scroll/scroll'
import axios from 'axios'

export default {
  components: {
    MHeader,
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
</script>

<style lang="stylus" scoped>
  .course-content
    height: 100%
    overflow: hidden
</style>
