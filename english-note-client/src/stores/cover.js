import { defineStore } from "pinia";
import { httpGetCoverContent } from "../utils/requests";

export const useCoverStore = defineStore("cover", {
  state: () => ({
    coverContent: [],
  }),
  getters: {
    getCoverContent() {
      return this.coverContent;
    },
  },
  actions: {
    saveCoverContent(content) {
      this.coverContent = content;
    },
    async getCoverContentHTTP() {
      try {
        const content = await httpGetCoverContent();
        this.saveCoverContent(content);
      } catch (error) {
        console.log("getCoverContentHTTP Error");
      }
    },
  },
});
