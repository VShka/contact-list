<template>

  <section>
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact @add-contact="addContact" />
    <ContactList 
      :contacts="contacts"
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
        {name: 'Victor'},
        {name: 'Victor'},
        {name: 'Victor'}
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
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
