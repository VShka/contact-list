<template>

  <section>
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact />
    <hr>
    <ContactList />
    <router-link to="/about" class="link">Подробнее</router-link>
  </section>

</template>

<script>
import AddContact from '@/components/AddContact';
import ContactList from '@/components/ContactList';

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
    AddContact,
    ContactList
  }
}

</script>

<style lang="scss" scoped>

</style>
