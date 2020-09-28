<template>

  <transition name="modal-fade">

    <div class="form-mask">
      
      <form class="form-detail">
    
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
          <button class="button button_prev" v-on:click.prevent="prevStep">
            Отменить
          </button>
          
          <button class="button button_save" @click.prevent="$emit('close')">
            Сохранить
          </button>
        </div>
          
      </form>
  </div>

  </transition>

  
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    prevStep() {
      document.execCommand("undo");
    }
  },
  computed: mapGetters(['detailContact'])
}
</script>

<style lang="scss" scoped>

// плавное закрытие
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

// подложка
.form-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

// форма
.form-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 25%;
  min-height: 300px;
  background-color: rgba(255, 255, 255, .9);
  border: 2px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  margin: 50px auto 0;
  padding: 3rem 0;
  

  &:hover {
    box-shadow: 0 0 10px rgb(56, 174, 221);
  }

  input {
    width: 50%;
    border: 1px solid #07079b;
    border-radius: 50px;
    margin: 0 auto;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
      box-shadow: 0 0 10px rgb(141, 141, 138);
    }
  }

  .button-container {
    display: flex;

    .button {
      width: 30%;
      color: #fff;
      font-weight: bold;
      border-radius: 50px;
      cursor: pointer;
      margin: 0 auto;
      padding: 0.5rem 1rem;

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
</style>