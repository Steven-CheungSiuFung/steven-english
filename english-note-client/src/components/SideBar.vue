<template>
  <div class="container">
    <div class="header-wrapper">
      <p class="sidebar-logo">Steven English</p>
      <div class="close-sidebar-icon" @click.prevent="toggleSideBarOpen">
        <Fold />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapStores, mapState } from "pinia";
import useSidebarStore from "@/stores/sideBar";
export default {
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-logo {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 3px;
}

.close-sidebar-icon {
  color: white;
  width: 36px;
  height: 36px;
}
</style>
