<template>
  <div>
    <div class="thing-header">
      <div class="main">
        <img
          :src="icon ? icon : '/img/icons/Jigsaw.png'"
          alt="ícone da postagem"
          class="reduced-motion"
        />
        <div>
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </div>
      </div>
      <div v-if="posted || edited" class="date">
        <p>{{ $t("posted") }}<br />{{ formatDate(posted) }}</p>
      </div>
    </div>
    <div v-if="tags" class="tags">
      <tag-link
        :url="url"
        v-for="tag in tags.split(' ')"
        :key="tag"
        :tag="tag"
      />
    </div>
  </div>
</template>

<script>
import TagLink from "~/components/TagLink.vue";

export default {
  components: {
    TagLink,
  },
  props: ["url", "icon", "title", "description", "posted", "edited", "tags"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(Number(date)).toLocaleDateString(
        this.$i18n.locale,
        options
      );
    },
  },
};
</script>

<style scoped>
.thing-header {
  padding: 1.25rem 1.75rem;
  background-color: var(--theme-main);
  width: 100%;
  color: white;
}

.thing-header .main {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
}

.thing-header .main img {
  transition-property: transform;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 200ms;

  height: 6rem;
  width: 6rem;
  margin: -1rem;
  object-fit: contain;
}

.thing-header .main img:hover {
  transform: rotate(6deg) scale(110%);
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
}

.description {
  font-style: italic;
  line-height: 1.25rem;
  text-align: center;
}

.date {
  padding-top: 0.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  gap: 1.25rem;
}

.tags {
  padding: 0.5rem 0px;
  background-color: var(--theme-nav);
  color: white;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}
</style>
