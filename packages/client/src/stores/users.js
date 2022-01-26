import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: {
      firstName: "",
    },
  }),
  getters: {
    getCurrentUserFirstName: (state) => state.currentUser.firstName,
  },
  actions: {
    setCurrentUserFirstName({ firstName }) {
      this.currentUser.firstName = firstName;
    },
  },
});
