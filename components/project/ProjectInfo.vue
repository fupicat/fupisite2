<template>
  <div class="project-info">
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

<style>
.project-info h1 {
  font-size: 1.625rem;
  text-align: center;
  margin-top: -0.3rem;
  font-weight: bold;
  color: var(--game-bgdark);
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
  background: var(--game-hov);
  padding: 0.5rem 1rem;
}

.dark .links a {
  background: var(--game-buttondark);
}

.links a:hover {
  background: var(--game-bg);
}

.dark .links a:hover {
  background: var(--game-hovdark);
}

.links div {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.dark .project-info h1 {
  color: var(--game-bg);
}

.project-info .main {
  margin: 1rem 0px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.4rem;
}

@media (min-width: 768px) {
  .project-info .main {
    flex-direction: row;
  }
}

.project-info .main div {
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);
}

.game .project-info .main div {
  background-color: var(--game-hov);
}

.dark .game .project-info .main div {
  background-color: var(--game-bgdark);
}
</style>