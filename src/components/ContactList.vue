<template>
  <ul class="contact-list">
    <ContactItem 
      v-for="(contact, i) in allContacts"
      :contact="contact"
      :index="i"
      :key="contact.id"
      @remove-contact="removeContact"
    />
  </ul>
</template>

<script>
import ContactItem from './ContactItem';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    ContactItem
  },
  methods: {
    ...mapActions(['fetchContacts']),
    removeContact(id) {
      this.$emit('remove-contact', id);
    }
  },
  async mounted() {
    this.fetchContacts();
  },
  computed: mapGetters(['allContacts'])
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