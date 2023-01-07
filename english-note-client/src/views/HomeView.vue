<template>
  <div class="container">
    <div :class="['side-bar', isSideBarOpen && 'sidebar-opened']">
      <side-bar></side-bar>
    </div>
    <div class="app-main">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

import { mapActions, mapStores, mapState } from "pinia";
import useSidebarStore from "@/stores/sideBar";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    ...mapStores(useSidebarStore),
    ...mapState(useSidebarStore, {
      isSideBarOpen: "sideBarState",
    }),
  },
  methods: {
    ...mapActions(useSidebarStore, ["toggleSideBarOpen"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.side-bar {
  width: 330px;
  height: 100vh;
  background-color: lightcoral;
  position: absolute;
  z-index: 1;
  left: -320px;
  transition: left 0.15s ease-out;
}

.sidebar-opened {
  left: 0;
  transition: left 0.5s ease-out;
}

.app-main {
  display: flex;
  flex-direction: column;
}
</style>
