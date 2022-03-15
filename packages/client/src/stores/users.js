import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    currentUser: {
      firstName: '',
      lastName: '',
      view: '',
      hasAccessToAdmin: false,
    },
  }),
  getters: {
    getCurrentUserFirstName: (state) => state.currentUser.firstName,
    getCurrentUserLastName: (state) => state.currentUser.lastName,
    getCurrentUserView: (state) => state.currentUser.view,
    getCurrentUserHasAccessToAdmin: (state) =>
      state.currentUser.hasAccessToAdmin,
  },
  actions: {
    setCurrentUserFirstName({ firstName }) {
      this.currentUser.firstName = firstName;
    },
    setCurrentUserLastName({ lastName }) {
      this.currentUser.lastName = lastName;
    },
    setCurrentUserView({ view }) {
      this.currentUser.view = view;
    },
    setCurrentUserHasAccessToAdmin({ hasAccessToAdmin }) {
      this.currentUser.hasAccessToAdmin = hasAccessToAdmin;
    },
  },
});
