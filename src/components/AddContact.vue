<template>
  <form class="form">
    <input type="text" placeholder="Введите имя контакта" class="form__input">
    <button type="submit" class="form__button">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {

    .form__input {
      padding: .5rem 2rem;
      border: 1px solid rgb(7, 7, 155);
      border-radius: 50px;

      &:focus {
        outline: none;
        box-shadow: 0 0 10px rgb(141, 141, 138);
      }
    }

    .form__button {
      padding: .5rem 2rem;
      margin-left: 10px;
      background: rgb(11, 160, 36);
      color: #fff;
      font-weight: bold;
      border: 1px solid green;
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 10px rgba(3, 172, 73, .7);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(3, 172, 73, .7);
      }

      &:active {
        background: rgba(11, 160, 36, .7);
      }
    }
  }
</style>