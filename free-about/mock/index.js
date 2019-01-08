import Mock from 'mockjs'
import courseData from '../course.json'

Mock.mock('/season/course', {
  code: 0,
  codeMsg: '成功',
  data: courseData.data
})