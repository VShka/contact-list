<template>
  <ul class="contact-list">
    <li
      v-for="contact in contacts"
      :contact="contact"
      :key="contact.id"
    ></li>
  </ul>
</template>

<script>
export default {
  props: ['contacts']
}
</script>