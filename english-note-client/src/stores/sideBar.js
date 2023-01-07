import { defineStore } from "pinia";

export default defineStore("sidebar", {
  state: () => ({
    isOpen: true,
  }),
  getters: {
    sideBarState: (state) => state.isOpen,
  },
  actions: {
    toggleSideBarOpen() {
      this.isOpen = !this.isOpen;
    },
  },
});
