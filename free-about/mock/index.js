import Mock from 'mockjs'
import courseData from '../data/course.json'
import detailData from '../data/detail.json'
import reservation from '../data/reservation.json'

Mock.mock('/season/course', {
  code: 0,
  codeMsg: '成功',
  data: courseData.data
})

Mock.mock(`/season/course/1`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[0]
})
Mock.mock(`/season/course/1`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[0]
})
Mock.mock(`/season/course/2`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[1]
})
Mock.mock(`/season/course/3`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[2]
})
Mock.mock(`/season/course/4`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[3]
})
Mock.mock(`/season/course/5`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[4]
})
Mock.mock(`/season/course/6`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[5]
})
Mock.mock(`/season/course/7`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[6]
})
Mock.mock(`/season/course/8`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[7]
})
Mock.mock(`/season/course/9`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[8]
})
Mock.mock(`/season/course/10`, {
  code: 0,
  codeMsg: '成功',
  data: detailData.data[9]
})

Mock.mock('/season/reservation', {
  code: 0,
  codeMsg: '成功',
  data: reservation.data
})
