<template>
  <div class="school">
    <div class="school-name">{{school}}</div>
    <div class="school-address">地址：{{address}}</div>
  </div>
</template>

<script>
export default {
  name: "School-name",
  props: {
    school: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.school
  width: 100%
  height: 168px
  background-color: $color-text
  box-sizing: border-box
  padding: 40px 0 0 30px
  .school-name
    font-size: $font-size-40
    font-weight: bold
    color: $color-text-b
    margin-bottom: 30px
  .school-address
    font-size: $font-size-22
    color: $color-text-f
</style>
