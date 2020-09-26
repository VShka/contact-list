<template>
  <section class="about">
    <DetailAboutContact />
    <router-link to="/" class="link">На страницу контактов</router-link>
  </section>
</template>

<script>
import DetailAboutContact from '../components/DetailAboutContact';
export default {
  components: {
    DetailAboutContact
  }
}
</script>

<style lang="scss" scoped>

</style>