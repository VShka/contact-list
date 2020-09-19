<template>

  <section>
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact @add-contact="addContact" />
    <ContactList 
      :contacts="contacts"
      @remove-contact="removeContact"
    />
    <!-- <router-link to="/about" class="link">Подробнее</router-link> -->
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
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Victor'}
      ]
    }
  },
  components: {
    AddContact,
    ContactList
  },
  methods: {
    addContact(contact) {
      this.contacts.push(contact);
    },
    removeContact(id) {
      this.contacts = this.contacts.filter( contact => contact.id !== id);
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
