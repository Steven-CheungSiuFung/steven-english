<template>
  <div class="container">
    <div class="open-sidebar-icon" @click.prevent="toggleSideBarOpen">
      <Expand />
    </div>
    <p>nav bar</p>
  </div>
</template>

<script>
import { mapActions, mapStores, mapState } from "pinia";
import useSidebarStore from "@/stores/sideBar";

export default {
  name: "NavBar",
  data() {
    return {
      size: 50,
    };
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
  padding: 1rem;
}

.open-sidebar-icon {
  width: 36px;
  height: 36px;
}
</style>
