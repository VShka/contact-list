<template>

  <section class="list">
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact />
    <ContactList 
      @remove-contact="removeContact"
    />
  </section>

</template>

<script>
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';

export default {
  components: {
    AddContact,
    ContactList
  },
  methods: {
    removeContact(id) {
      const confirm = window.confirm("Точно удалить контакт?");
      
      if (confirm) {
        this.contacts = this.contacts.filter( contact => contact.id !== id);
      }
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
