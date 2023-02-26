<template>
  <div class="container">
    <div class="bg-image"></div>
    <div class="header-wrapper">
      <div class="sidebar-logo" @click="handleNavLink('home', $event)">
        Steven English
      </div>
      <div class="close-sidebar-icon" @click.prevent="toggleSideBarOpen">
        <Fold />
      </div>
    </div>
    <div class="links-wrapper">
      <div class="sidebar-link" @click="handleNavLink('vocabulary', $event)">
        Vocabulary
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapStores, mapState } from "pinia";
import { usePiniaStore } from "../stores";

export default {
  computed: {
    ...mapStores(usePiniaStore.useSideBarStore),
    ...mapState(usePiniaStore.useSideBarStore, {
      isSideBarOpen: "sideBarState",
    }),
  },
  methods: {
    ...mapActions(usePiniaStore.useSideBarStore, ["toggleSideBarOpen"]),
    handleNavLink(toName, event) {
      const router = this.$router;
      this.toggleSideBarOpen();
      router.push({ name: toName });
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-right: 5px solid black;
}

.bg-image {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 0;
  top: 0;
  right: 0;
  background-image: url("../assets/pattern.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.7;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid floralwhite;
  padding-bottom: 0.8rem;
}

.sidebar-logo {
  color: floralwhite;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Courgette", cursive;
  text-decoration: none;
}

.close-sidebar-icon {
  color: floralwhite;
  width: 36px;
  height: 36px;
}

.links-wrapper {
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-link {
  color: floralwhite;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  font-family: "Kalam", cursive;
}
</style>
