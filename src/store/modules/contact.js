export default {
  state: {
    contacts: []
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
    removeContact(id) {
      const confirm = window.confirm("Точно удалить контакт?");
      
      if (confirm) {
        state.contacts = state.contacts.filter( contact => contact.id !== id);
      }
    },
    updateContacts(state, contacts) {
      state.contacts = contacts;
    }
  },
  actions: {
    async fetchContacts(context) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      const contacts = await res.json();

      context.commit('updateContacts', contacts);
    }
  }
}