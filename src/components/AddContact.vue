<template>
  <form>
    <input type="text" placeholder="Введите имя контакта">
    <button type="submit">Добавить</button>
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