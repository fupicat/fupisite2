<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <ul>
      <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
    </ul>
    <p>Postado dia {{ dateStrings.posted }}</p>
    <p v-if="post.date !== post.edited">Editado pela última vez dia {{ dateStrings.edited }}</p>
  </article>
</template>

<script>
const axios = require('axios');

export default {
  async asyncData ({ payload, params }) {
    if (payload) {
      return { post: payload }
    } else {
      const res = await axios.get('https://fupisite2-posts.glitch.me/posts/' + params.post);
      return { post: res.data }
    }
  },

  computed: {
    dateStrings: function() {
      function convert(unix) {
        const date = new Date(unix);
        const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        const time = `${day} de ${month} de ${year} às ${hour}:${min}:${sec}` ;
        return time;
      }

      const posted = convert(this.post.date);
      const edited = convert(this.post.edited);

      return { posted, edited }
    }
  }
}
</script>

<style>

</style>