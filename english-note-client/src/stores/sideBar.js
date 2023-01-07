import { defineStore } from "pinia";

export default defineStore("sidebar", {
  state: () => ({
    isSidebarOpen: true,
  }),
  getters: {
    sideBarState: (state) => state.isSidebarOpen,
  },
  actions: {
    toggleSideBarOpen() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
