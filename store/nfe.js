export const state = () => ({
  nfe: false
})

export const mutations = {
  change(state, to = null) {
    if (to == null || to === undefined) {
      state.nfe = !state.nfe;
    } else {
      state.nfe = to;
    }
  }
}