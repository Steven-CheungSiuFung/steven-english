import { defineStore } from "pinia";
import { httpAddNewVocab } from "../utils/requests";

export const useVocabCardStore = defineStore("vocabCard", {
  state: () => ({
    isVocabCardOpen: false,
    isAddVocabDialogOpen: false,
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
    getIsAddVocabDialogOpen: (state) => state.isAddVocabDialogOpen,
  },
  actions: {
    setIsVocabCardOpen(boolean) {
      this.isVocabCardOpen = boolean;
    },
    setVocabCardContent(content) {
      this.cardContent = { ...this.cardContent, ...content };
    },
    setIsAddVocabDialogOpen(boolean) {
      this.isAddVocabDialogOpen = boolean;
    },
    async addNewVocab(form) {
      try {
        const result = await httpAddNewVocab(form);
        return result;
      } catch (error) {
        console.error("addNewVocab Error", error);
      }
    },
  },
});
