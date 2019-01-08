<template>
  <div class="course">
    <m-header></m-header>
    <school-name></school-name>
    <season></season>
  </div>
</template>

<script>
import MHeader from '@/common/components/header/Header'
import SchoolName from '@/page/course/components/School-name'
import Season from '@/common/components/season/Season'

export default {
  components: {
    MHeader,
    SchoolName,
    Season
  }
}
</script>

<style lang="stylus" scoped>
  .school
    margin-top: 1px
</style>
