<template>
  <div>
    <page-header :title="$t('projects')" :description="$t('projectsDesc')" />
    <container>
    </container>
  </div>
</template>

<script>
import Container from '~/components/Container.vue'
import PageHeader from '~/components/PageHeader.vue'
export default {
  components: { Container, PageHeader },

}
</script>

<style>

</style>