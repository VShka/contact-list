<template>

  <section>
    <h1>Список ваших контактов</h1>
    <hr>
    <AddContact @add-contact="addContact" />
    <ContactList 
      :contacts="contacts"
      @remove-contact="removeContact"
    />
  </section>

</template>

<script>
import AddContact from '@/components/AddContact';
import ContactList from '@/components/ContactList';

export default {
  data() {
    return {
      contacts: [
        {id: 1, name: 'Victor', surname: '', email: '', tel: Number},
        {id: 2, name: 'Victor', surname: '', email: '', tel: Number},
        {id: 3, name: 'Victor', surname: '', email: '', tel: Number}
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
