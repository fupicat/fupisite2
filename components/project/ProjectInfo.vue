<template>
  <div class="project-info">
    <div v-if="document.warning" class="warning">
      <h1><i class="fas fa-exclamation-triangle fa-sm"></i></h1>
      <p>{{ document.warning }}</p>
    </div>
    <div class="main">
      <div v-if="document.instructions" class="instructions">
        <h1><i class="fas fa-question-circle fa-sm"></i> {{ $t("projInstructions") }}</h1>
        <ul class="fa-ul">
          <li v-for="inst in document.instructions" :key="inst">
            <span class="fa-li"><i class="fas fa-xs fa-chevron-circle-right"></i></span>{{ inst }}
          </li>
        </ul>
      </div>
      <div v-if="document.about" class="about">
        <h1><i class="fas fa-info-circle fa-sm"></i> {{ $t("projAbout") }}</h1>
        <p v-for="line in document.about" :key="line">{{ line }}</p>
      </div>
    </div>
    <div v-if="document.links" class="links">
      <h1><i class="fas fa-external-link-alt fa-sm"></i> {{ $t("projLinks") }}</h1>
      <div>
        <a class="fupi-btn" v-for="link in document.links" :key="link.text" :href="link.link">{{ link.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: Object,
  }
}
</script>

<style scoped>
.project-info h1 {
  font-size: 1.625rem;
  text-align: center;
  margin-top: -0.3rem;
  font-weight: bold;
}

.instructions, .about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.instructions li {
  margin-bottom: 1rem;
  text-align: justify;
}

.about p {
  text-indent: 1.6rem;
  margin-bottom: 1rem;
  text-align: justify;
}

.links a {
  padding: 0.5rem 1rem;
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

.project-info .main div, .warning {
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);
}

/* Game */

.game .project-info .main div {
  background-color: var(--game-hov);
}

.dark .game .project-info .main div {
  background-color: var(--game-bgdark);
}

.game .project-info .main h1, .game .project-info .links h1 {
  color: var(--game-bgdark);
}

.game .links a {
  background: var(--game-hov);
}

.dark .game .links a {
  background: var(--game-buttondark);
}

.game .links a:hover {
  background: var(--game-bg);
}

.dark .game .links a:hover {
  background: var(--game-hovdark);
}

.dark .game .project-info .main h1, .dark .game .project-info .links h1 {
  color: var(--game-bg);
}
</style>