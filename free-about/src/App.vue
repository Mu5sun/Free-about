<template>
  <div id="app">
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from 'page/footer/Footer'

export default {
  name: 'App',
  components: {
    MFooter
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable'

  #app
    background-color: $color-background
</style>
