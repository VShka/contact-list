<template>

  <section class="list">
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact />
    <ContactList />
  </section>

</template>

<script>
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList'

export default {
  components: {
    AddContact,
    ContactList
  }
}

</script>

<style lang="scss" scoped>
</style>
