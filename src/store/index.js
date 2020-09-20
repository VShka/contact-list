import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {id: 1, name: 'Victor', surname: '', email: '', tel: Number},
      {id: 2, name: 'Polina', surname: '', email: '', tel: Number},
      {id: 3, name: 'Bruno', surname: '', email: '', tel: Number}
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
