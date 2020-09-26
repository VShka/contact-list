<template>
  <div class="form__container">
    <h2>Детальная информация контакта: {{ detailContact.name }}</h2>
    <form class="form-detail" @submit.prevent="getNewDetail">
      <p>
        Имя: {{ detailContact.name }}
      </p>
      <input
        type="text"
        name="name"
        placeholder="Введите имя"
        v-model="detailContact.name"
      >
      <p>
        Фамилия: {{ detailContact.surname }}
      </p>
      <input
        type="text"
        name="surname"
        placeholder="Введите фамилию"
        v-model="detailContact.surname"
      >
      <p>
        Email: {{ detailContact.email }}
      </p>
      <input
        type="email"
        name="email"
        placeholder="Введите email"
        v-model="detailContact.email"
      >
      <p>
       Мобильный: {{ detailContact.tel }}
      </p>
      <input
        type="text"
        name="tel"
        placeholder="Введите номер телефона"
        v-model="detailContact.tel"
      >

    </form>
  </div>
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

.form__container {
  margin-bottom: 1rem;

  .form-detail {
    max-width: 30%;
    margin: 0 auto;
    padding-bottom: 3rem;
    border: 2px solid #ccc;

    &:hover {
        box-shadow: 0 0 10px rgb(141, 141, 138);
      }

    p {
      font-weight: bold;
      font-size: 24px;
    }

    input {
      max-width: 50%;
      padding: .5rem 2rem;
      border: 1px solid rgb(7, 7, 155);
      border-radius: 50px;

      &:focus {
        outline: none;
        box-shadow: 0 0 10px rgb(141, 141, 138);
      }
    }
  }
}


</style>