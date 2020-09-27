<template>
  <div class="form__container">
    <h2>Детальная информация контакта: {{ detailContact.name }}</h2>

    <div class="form-detail__info">
      <p>
        Имя:
        <strong>
          {{ detailContact.name }}
        </strong>
      </p>
      <p>
        Фамилия: 
        <strong>
          {{ detailContact.surname }}
        </strong>
      </p>
      <p>
        Email:
        <strong>
          {{ detailContact.email }}
        </strong>
      </p>
      <p>
        Мобильный:
        <strong>
          {{ detailContact.tel }}
        </strong>
      </p>
    </div>

    <form class="form-detail" @submit.prevent="getNewDetail">
      
      <input
      type="text"
      name="name"
      placeholder="Введите имя"
      v-model="detailContact.name"
      >
      <input
        type="text"
        name="surname"
        placeholder="Введите фамилию"
        v-model="detailContact.surname"
      >
      <input
        type="email"
        name="email"
        placeholder="Введите email"
        v-model="detailContact.email"
      >
      <input
        type="text"
        name="tel"
        placeholder="Введите номер телефона"
        v-model="detailContact.tel"
      >

      <div class="button-container">
        <button class="button button_prev" v-on:click="prevStep">
          Отменить
        </button>
        
        <button class="button button_save">
          Сохранить
        </button>
      </div>
      
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
    },

    prevStep() {
      document.execCommand("undo");
    }
  },
  computed: mapGetters(['detailContact'])
}
</script>

<style lang="scss" scoped>

.form__container {
  margin-bottom: 1rem;

  p {
      font-size: 24px;
    }

  .form-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 25%;
    min-height: 300px;
    margin: 0 auto;
    padding: 3rem 0;
    border: 2px solid #ccc;

    &:hover {
        box-shadow: 0 0 10px rgb(141, 141, 138);
      }

    input {
      width: 50%;
      margin: 0 auto;
      padding: 0.5rem 1rem;
      border: 1px solid #07079b;
      border-radius: 50px;

      &:focus {
        outline: none;
        box-shadow: 0 0 10px rgb(141, 141, 138);
      }
    }

    .button-container {
      display: flex;

      .button {
        width: 30%;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        color: #fff;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;

        &:focus {
          outline: none;
          box-shadow: 0 0 10px rgba(13, 19, 16, 0.7);
        }
      }
      .button_save {
        background: rgb(11, 160, 36);
        border: 1px solid green;

        &:active {
          background: rgba(11, 160, 36, .7);
        }
      }
      .button_prev {
        background: red;
        border: 1px solid red;

        &:active {
          background: rgba(202, 37, 37, 1);
        }
      }
    }
  }
}


</style>