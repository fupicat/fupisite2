<template>
  <input
    v-model="searchQuery"
    type="search"
    autocomplete="off"
    placeholder="Pesquisar..."
    class="p-1 w-full mt-2"
  />
</template>

<script>
export default {
  props: {
    type: String,
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    query(query) {
      this.searchQuery = query;
    },
    async searchQuery(searchQuery) {
      let results = [];
      if (!searchQuery) {
        results = await this.$content(this.type)
          .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
          .sortBy('posted', 'desc')
          .fetch()
        this.$emit("SearchChanged", results)
        return
      }
      results = await this.$content(this.type)
        .search(searchQuery)
        .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
        .sortBy('posted', 'desc')
        .fetch()
      this.$emit("SearchChanged", results)
    }
  }
}
</script>