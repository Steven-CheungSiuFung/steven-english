import { defineStore } from "pinia";

export const useSideBarStore = defineStore("sidebar", {
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
