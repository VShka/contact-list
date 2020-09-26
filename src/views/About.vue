<template>
  <section class="about">
    <h2>Детальная информация контакта: {{ detailContact.name }}</h2>
    <form class="detail-info" @submit.prevent="getNewDetail">
      <p> {{ detailContact.name }} </p>
      <input
        type="text"
        name="name"
        placeholder="Введите имя"
        v-model="detailContact.name"
      >
      <p> {{ detailContact.surname }} </p>
      <input
        type="text"
        name="surname"
        placeholder="Введите фамилию"
        v-model="detailContact.surname"
      >
      <p> {{ detailContact.email }} </p>
      <input
        type="email"
        name="email"
        placeholder="Введите email"
        v-model="detailContact.email"
      >
      <p> {{ detailContact.tel }} </p>
      <input
        type="text"
        name="tel"
        placeholder="Введите номер телефона"
        v-model="detailContact.tel"
      >

      <button
        class="detail-info__button"
        type="submit"
      >
        Сохранить изменения
      </button>
    </form>
    <router-link to="/" class="link">На страницу контактов</router-link>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['updateContacts']),

    getNewDetail() {
      this.updateContacts({
        name: this.detailContact.name,
        surname: this.detailContact.surname,
        email: this.detailContact.email,
        tel: this.detailContact.tel
      })
    }
  },
  computed: mapGetters(['detailContact'])
}
</script>

<style lang="scss" scoped>

.detail-info {
  display: flex;
  flex-direction: column;
}

</style>