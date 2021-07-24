<template>
  <h2>{{ $route.params.post }}</h2>
</template>

<script>
export default {
  async asyncData ({ payload }) {
    if (payload) {
      return { posts: payload }
    } else {
      const res = await axios.get('https://fupisite2-posts.glitch.me/posts/' + );
      return { posts: res.data }
    }
  }
}
</script>

<style>

</style>