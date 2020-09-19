<template>
  <ul class="contact-list">
    <ContactItem 
      v-for="(contact, i) in contacts"
      :contact="contact"
      :index="i"
      :key="contact.id"
    />
  </ul>
</template>

<script>
import ContactItem from '@/components/ContactItem';
export default {
  props: ['contacts'],
  components: {
    ContactItem
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