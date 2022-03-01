<template>
  <div class="project-info">
    <div v-if="document.warning" class="warning">
      <h1><i class="fas fa-exclamation-triangle fa-sm"></i></h1>
      <p>{{ document.warning }}</p>
    </div>
    <div class="main">
      <div v-if="document.instructions" class="panel instructions">
        <h1>
          <i class="fas fa-question-circle fa-sm"></i>
          {{ $t("projInstructions") }}
        </h1>
        <nuxt-content :document="document.instructions" />
      </div>
      <div v-if="document.about" class="panel about">
        <h1><i class="fas fa-info-circle fa-sm"></i> {{ $t("projAbout") }}</h1>
        <nuxt-content :document="document.about" />
      </div>
    </div>
    <div v-if="document.links" class="links">
      <h1>
        <i class="fas fa-external-link-alt fa-sm"></i> {{ $t("projLinks") }}
      </h1>
      <div>
        <a
          class="fupi-btn"
          v-for="link in document.links"
          :key="link.text"
          :href="link.link"
          >{{ link.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: Object,
  },
};
</script>

<style scoped lang="scss">
.project-info h1 {
  font-size: 1.625rem;
  text-align: center;
  margin: 0rem 0rem 0.2rem 0rem;
  font-weight: bold;
  color: var(--theme-title);
}

.instructions,
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.instructions {
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      margin-bottom: 1rem;
      text-align: justify;
      list-style: inside disc;
    }
  }
}

.about {
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-indent: 1.6rem;
      margin-bottom: 1rem;
      text-align: justify;
    }
  }
}

.links div {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.project-info .main {
  margin: 1rem 0px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.4rem;
}

.warning {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.4rem;
  background-color: #ea7e65;
}

.warning h1 {
  color: #7b1717;
}

.dark .warning {
  background-color: #8c1919;
}

.dark .warning h1 {
  color: #ea7e65;
}

@media (min-width: 768px) {
  .project-info .main {
    flex-direction: row;
  }
}

.project-info .main .panel,
.warning {
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);
}

.project-info .main .panel {
  background-color: var(--theme-panel);
}
</style>
