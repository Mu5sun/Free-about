<template>
  <div class="about-class">
    <week></week>
  </div>
</template>

<script>
import Week from '@/page/about-class/components/week'

export default {
  components: {
    Week
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
</style>
