import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: {
      firstName: "",
      view: "",
      hasAccessToAdmin: false,
    },
  }),
  getters: {
    getCurrentUserFirstName: (state) => state.currentUser.firstName,
    getCurrentUserView: (state) => state.currentUser.view,
    getCurrentUserHasAccessToAdmin: (state) =>
      state.currentUser.hasAccessToAdmin,
  },
  actions: {
    setCurrentUserFirstName({ firstName }) {
      this.currentUser.firstName = firstName;
    },
    setCurrentUserView({ view }) {
      this.currentUser.view = view;
    },
    setCurrentUserHasAccessToAdmin({ hasAccessToAdmin }) {
      this.currentUser.hasAccessToAdmin = hasAccessToAdmin;
    },
  },
});
