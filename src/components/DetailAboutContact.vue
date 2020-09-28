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

    <AddContactForm />

  </div>
</template>

<script>
import AddContactForm from './AddContactForm';
import { mapGetters, mapMutations } from 'vuex';
export default {
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

.form__container {
  margin-bottom: 1rem;

  p {
      font-size: 24px;
    }

  
}


</style>