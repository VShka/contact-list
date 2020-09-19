<template>

  <section>
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact />
    <ul class="contact-list">
      <li
        v-for="contact in contacts"
        :contact="contact"
        :key="contact.id"
      ></li>
    </ul>
    <router-link to="/about" class="link">Подробнее</router-link>
  </section>

</template>

<script>
import AddContact from '@/components/AddContact';

export default {
  data() {
    return {
      contacts: [
        {id: 1, name: 'Victor'},
        {id: 1, name: 'Victor'},
        {id: 1, name: 'Victor'}
      ]
    }
  },
  components: {
    AddContact
  }
}

</script>

<style lang="scss" scoped>

</style>
