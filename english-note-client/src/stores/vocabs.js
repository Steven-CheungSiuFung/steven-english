import { defineStore } from "pinia";
import { httpGetVocabs } from "../utils/requests";

export default defineStore("vocabs", {
  state: () => ({
    vocabsList: [],
    isVocabsError: false,
  }),
  getters: {
    getVocabsList() {
      return this.vocabsList;
    },
    getVocabsError() {
      return this.isVocabsError;
    },
  },
  actions: {
    saveVocabsList(vocabs) {
      this.vocabsList = vocabs;
    },
    setIsVocabsError(boolean) {
      this.isVocabsError = boolean;
    },
    async getVocabsHTTP() {
      try {
        const fetchedVocabs = await httpGetVocabs();
        this.saveVocabsList(fetchedVocabs);
        this.setIsVocabsError(false);
      } catch (error) {
        console.log("getVocabsHTTP Error");
        this.setIsVocabsError(true);
      }
    },
  },
});
