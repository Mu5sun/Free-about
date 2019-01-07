<template>
  <div class="course">
    <m-header></m-header>
    <school-name></school-name>
    这是课程
  </div>
</template>

<script>
import MHeader from '@/common/components/header/Header'
import SchoolName from '@/page/course/components/School-name'

export default {
  components: {
    MHeader,
    SchoolName
  }
}
</script>

<style lang="stylus" scoped>

</style>
