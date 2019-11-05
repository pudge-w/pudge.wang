export const state = () => ({
  // list: []
  searchOutShow: false,
  navOutShow: false
})

export const mutations = {
  // add (state, text) {
  //   state.list.push({
  //     text,
  //     done: false
  //   })
  // },
  // remove (state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1)
  // },
  // toggle (state, todo) {
  //   todo.done = !todo.done
  // }
  change (state, value) {
    state.searchOutShow = value
  },
  showNavOut (state, value) {
    state.navOutShow = value
  }
}