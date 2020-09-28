<template>
  <div class="info-container">
    <h2>Детальная информация контакта: {{ detailContact.name }}</h2>

    <div class="info__detail">
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

    <button
      class="button button_change"
      @click="showModal = true"
    >
      Редактировать
    </button>

    <AddContactForm
      v-if="showModal"
      @close="showModal = false"
    />

  </div>
</template>

<script>
import AddContactForm from './AddContactForm';
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      // флаг для открытия/закрытия popup формы
      showModal: false
    }
  },
  components: {
    AddContactForm
  },
  methods: {
    ...mapMutations(['updateContacts']),

    // getNewDetail() {
    //   this.updateContacts({
    //     name: this.detailContact.name,
    //     surname: this.detailContact.surname,
    //     email: this.detailContact.email,
    //     tel: this.detailContact.tel
    //   })
    // }
  },
  computed: mapGetters(['detailContact'])
}
</script>

<style lang="scss" scoped>

.info-container {
  margin-bottom: 1rem;

  p {
      font-size: 24px;
    }

  .button {
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
  .button_change {
    background: rgb(195, 106, 46);
    border: 1px solid rgb(185, 140, 43);

    &:hover {
      box-shadow: 0 0 10px rgba(86, 92, 88, 1);
    }

    &:active {
      background: rgb(253, 253, 253);
      color: #000;
    }
  }
}

</style>