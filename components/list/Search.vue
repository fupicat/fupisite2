<template>
  <div class="search">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Pesquisar..."
    />
    <loading v-show="loading" />
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading,
  },
  props: {
    type: String,
    query: String,
  },
  data() {
    return {
      searchQuery: '',
      loading: false,
    }
  },
  watch: {
    query(query) {
      this.searchQuery = query;
    },
    async searchQuery(searchQuery) {
      this.loading = true;

      let results = [];

      if (!searchQuery) {
        results = await this.$content(`${this.$i18n.locale}/${this.type}`)
          .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
          .sortBy('posted', 'desc')
          .fetch()
        
        this.loading = false;
        this.$emit("SearchChanged", results)
        return
      }
      results = await this.$content(`${this.$i18n.locale}/${this.type}`)
        .search(searchQuery)
        .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
        .sortBy('posted', 'desc')
        .fetch()
      
      this.loading = false;
      this.$emit("SearchChanged", results);
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
}

input {
  padding: 0.25rem;
  width: 100%;
  margin-top: 0.5rem;
  color: black;
  border-radius: 0.4rem;
}
</style>