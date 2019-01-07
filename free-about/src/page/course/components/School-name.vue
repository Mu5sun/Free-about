<template>
  <div class="school">
    <div class="school-name">{{school}}</div>
    <div class="school-address">{{address}}</div>
  </div>
</template>

<script>
export default {
  name: "School-name",
  props: {
    school: {
      type: String,
      default: '古筝艺术培训'
    },
    address: {
      type: String,
      default: '福州市闽侯县甘蔗镇'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~stylus/variable"

.school
  width: 100%
  height: 84px
  background-color: $color-text
  box-sizing: border-box
  padding: 20px 0 0 15px
  .school-name
    font-size: $font-size-40
    font-weight: bold
    color: $color-text-b
    margin-bottom: 15px
  .school-adress
    font-size: $font-size-22
    color: $color-text-f
</style>
