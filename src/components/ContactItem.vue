<template>
  <li class="contact-list__item">
    <strong>
      {{ index + 1 }}
    </strong>

    <span>
      {{ contact.name }}
    </span>

    <div class="control-container">
      <button
        class="button button_detail"
      >
        <router-link to="/about" class="link">Подробнее</router-link>
      </button>
      <button
        class="button button_delete"
        v-on:click="remove"
      >
        Удалить
      </button>
    </div>
    
  </li>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  props: ['contact', 'index'],
  methods: {
    // ...mapMutations(['removeContact']),
    remove() {
      this.$store.commit('removeContact', 25);
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-list__item {
  width: 30%;
  // border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;

  .control-container {
    .button {
    color: #fff;
    border: none;
    font-weight: bold;
    padding: 5px 20px;
    cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(13, 19, 16, 0.7);
      }
      
      .link {
        color: #fff;
      }
    }

    .button_delete {
      background-color: red;
      border-top-right-radius: 20px;

       &:active {
        background: rgba(202, 37, 37, 1);
      }
    }

    .button_detail {
      background: blue;
      border-top-left-radius: 20px;

       &:active {
        background: rgba(14, 16, 155, 1);
      }
    }
  }
}
</style>