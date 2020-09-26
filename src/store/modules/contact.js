export default {
  state: {
    contacts: [
      {id: 1, name: 'Victor', surname: 'Shkarupa', email: '', tel: ''},
      {id: 2, name: 'Polina', surname: 'Shkarupa', email: '', tel: ''},
      {id: 3, name: 'Bruno', surname: 'Shkarupa', email: '', tel: ''}
    ]
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    }
  },
  mutations: {
    addContact(state, newContact) {
      state.contacts.unshift(newContact);
    },
    removeContact(state, id) {
      const confirm = window.confirm("Точно удалить контакт?");
      
      if (confirm) {
        state.contacts = state.contacts.filter( contact => contact.id !== id);
      }
    },
    updateContacts(state, contacts) {
      state.contacts = contacts;
    }
  },
  actions: {}
}