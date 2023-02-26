import { defineStore } from "pinia";

export const useVocabCardStore = defineStore("vocabCard", {
  state: () => ({
    isVocabCardOpen: false,
    cardContent: {
      word: "",
      pos: "",
      phonetic: "",
      meaning: "",
      sentences: [],
      imageUrl: "",
    },
  }),
  getters: {
    getIsVocabCardOpen: (state) => state.isVocabCardOpen,
    getVocabCardContent: (state) => state.cardContent,
  },
  actions: {
    setIsVocabCardOpen(boolean) {
      this.isVocabCardOpen = boolean;
    },
    setVocabCardContent(content) {
      console.log("update!!");
      this.cardContent = { ...this.cardContent, ...content };
    },
  },
});
