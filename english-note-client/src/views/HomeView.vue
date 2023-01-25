<template>
  <div class="home-container">
    <div :class="['side-bar', isSideBarOpen && 'sidebar-opened']">
      <side-bar></side-bar>
    </div>
    <div class="app-main">
      <nav-bar></nav-bar>
      <router-view></router-view>
      <div v-if="this.$route.name == 'home'" class="cover-content-wrapper">
        <p v-for="item in coverContent" class="cover-content">{{ item }}</p>
      </div>
      <div
        v-show="isVocabCardOpen"
        class="card-bg"
        @click.prevent="setIsVocabCardOpen(false)"
      ></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

import { mapActions, mapStores, mapState } from "pinia";
import useSidebarStore from "@/stores/sideBar";
import useVocabCardStore from "@/stores/vocabCard";
import { useCoverStore } from "@/stores/cover";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    ...mapStores(useSidebarStore, useVocabCardStore, useCoverStore),
    ...mapState(useSidebarStore, {
      isSideBarOpen: "sideBarState",
    }),
    ...mapState(useVocabCardStore, {
      isVocabCardOpen: "getIsVocabCardOpen",
    }),
    ...mapState(useCoverStore, {
      coverContent: "getCoverContent",
    }),
  },
  methods: {
    ...mapActions(useSidebarStore, ["toggleSideBarOpen"]),
    ...mapActions(useVocabCardStore, ["setIsVocabCardOpen"]),
    ...mapActions(useCoverStore, ["getCoverContentHTTP"]),
  },
  async created() {
    await this.getCoverContentHTTP();
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
}

.side-bar {
  width: 97%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  left: -95%;
  transition: left 0.15s ease-out;
  background-color: darkred;
}

.sidebar-opened {
  left: 0;
  transition: left 0.5s ease-out;
}

.app-main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.cover-content-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
}

.cover-content {
  width: 75%;
  font-family: "Kalam", cursive;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
}

.card-bg {
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
}
</style>
