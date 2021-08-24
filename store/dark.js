export const state = () => ({
  dark: false
})

export const mutations = {
  change(state, to = null) {
    if (to == null || to === undefined) {
      state.dark = !state.dark;
    } else {
      state.dark = to;
    }
  }
}