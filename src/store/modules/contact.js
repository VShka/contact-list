export default {
  state: {
    contacts: [
      {id: 1, name: 'Victor', surname: 'Shkarupa', email: '', tel: ''},
      {id: 2, name: 'Polina', surname: 'Shkarupa', email: '', tel: ''},
      {id: 3, name: 'Bruno', surname: 'Shkarupa', email: '', tel: ''}
    ],
    contact: {
      id: null,
      name: null,
      surname: '',
      email: '',
      tel: null
    }
  },
  getters: {
    // геттер для получения текущего стейта
    allContacts(state) {
      return state.contacts;
    },
    detailContact(state) {
      return state.contact;
    }
  },
  mutations: {
    // мутации для изменения стейта
    addContact(state, newContact) {
      state.contacts.unshift(newContact);
    },
    removeContact(state, id) {
      const confirm = window.confirm("Точно удалить контакт?");
      
      if (confirm) {
        state.contacts = state.contacts.filter( contact => contact.id !== id);
      }
    },

    // получаем 1 контакт, детальную информацию которого хотим увидеть
    getDetailContact(state, id) {
      state.contact = state.contacts.find( contact => contact.id == id);
    },

    // обновляем детальную информацию о контакте и меняем значения в общем массиве контактов
    updateContacts(state, contact) {
      state.contacts.forEach( item => {
        if (item.id == contact.id) {
          item.name = contact.name;
          item.surname = contact.surname;
          item.email = contact.email;
          item.tel = contact.tel;
        }
        return;
      })
    }
  },
  actions: {}
}