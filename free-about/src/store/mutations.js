import * as types from './mutation-types'

const mutations = {
  [types.CLASS_ID] (state, id) {
    state.classId = id
  }
}

export default mutations
