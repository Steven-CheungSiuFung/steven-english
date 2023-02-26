<template>
  <div class="container">
    <div class="nav-wrapper">
      <div class="open-sidebar-icon" @click.prevent="toggleSideBarOpen">
        <Expand />
      </div>
      <div class="navbar-logo" @click.prevent="handleNavLink">
        Steven English
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapStores, mapState } from "pinia";
import { usePiniaStore } from "../stores";

export default {
  name: "NavBar",
  data() {
    return {
      size: 50,
    };
  },
  computed: {
    ...mapStores(usePiniaStore.useSideBarStore),
    ...mapState(usePiniaStore.useSideBarStore, {
      isSideBarOpen: "sideBarState",
    }),
  },
  methods: {
    ...mapActions(usePiniaStore.useSideBarStore, ["toggleSideBarOpen"]),
    handleNavLink() {
      const router = this.$router;
      router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
}

.nav-wrapper {
  width: 100%;
  display: flex;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid black;
}

.open-sidebar-icon {
  width: 36px;
  height: 36px;
}

.navbar-logo {
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 8px;
  text-decoration: none;
  font-family: "Courgette", cursive;
}
</style>
