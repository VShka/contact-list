import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {id: 1, name: 'Victor', surname: '', email: '', tel: Number},
      {id: 1, name: 'Victor', surname: '', email: '', tel: Number},
      {id: 1, name: 'Victor', surname: '', email: '', tel: Number}
    ]
  },
  mutations: {
    addContact(contact) {
      state.contacts.push(contact);
    },
    removeContact(id) {
      const confirm = window.confirm("Точно удалить контакт?");
      
      if (confirm) {
        state.contacts = state.contacts.filter( contact => contact.id !== id);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
