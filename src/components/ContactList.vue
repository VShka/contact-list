<template>
  <ul class="contact-list">
    <ContactItem 
      v-for="(contact, i) in contacts"
      :contact="contact"
      :index="i"
      :key="contact.id"
      @remove-contact="removeContact"
    />
  </ul>
</template>

<script>
import ContactItem from './ContactItem';
export default {
  props: ['contacts'],
  components: {
    ContactItem
  },
  methods: {
    removeContact(id) {
      this.$emit('remove-contact', id);
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 20px 0;
    padding: 0;
  }
</style>