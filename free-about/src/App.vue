<template>
  <div id="app">
    <m-header :title="title"></m-header>
    <router-view/>
    <m-footer @changeTab="change"></m-footer>
  </div>
</template>

<script>
import MFooter from 'page/footer/Footer'
import MHeader from '@/common/components/header/Header'

export default {
  name: 'App',
  components: {
    MFooter,
    MHeader
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    change (value) {
      this.title = value
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable'

  #app
    background-color: $color-background
</style>
