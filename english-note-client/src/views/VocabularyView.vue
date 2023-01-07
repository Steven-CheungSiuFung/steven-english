<template>
  <div class="container">
    <ul class="word-list">
      <li v-for="item in tableData">
        <div class="item-row" @click.prevent="handleCardOpen(item, $event)">
          <p class="item-word">{{ item.word }}</p>
          <p class="item-pos">{{ item.pos }}</p>
        </div>
      </li>
    </ul>
    <div v-show="isVocabCardOpen" class="vocab-card">
      <vocab-card></vocab-card>
    </div>
  </div>
</template>

<script>
import { vocabList } from "../../mock/mockData";
import { mapStores, mapActions, mapState } from "pinia";
import useVocabCardStore from "@/stores/vocabCard";

import VocabCard from "../components/VocabCard.vue";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: { VocabCard },
  computed: {
    ...mapStores(useVocabCardStore),
    ...mapState(useVocabCardStore, {
      isVocabCardOpen: "getIsVocabCardOpen",
    }),
  },
  methods: {
    ...mapActions(useVocabCardStore, [
      "setIsVocabCardOpen",
      "setVocabCardContent",
    ]),
    handleCardOpen(item, event) {
      try {
        // console.log({ ...item.sentences });
        const content = { ...item };
        const sentences = { ...item.sentences };
        const keyList = Object.keys(sentences);
        const sentencesArray = keyList.map((key) => sentences[key]);
        const currentContent = { ...content, sentences: sentencesArray };
        this.setVocabCardContent(currentContent);
        this.setIsVocabCardOpen(true);
      } catch (error) {
        console.log("OnClickError ==>> ", error);
      }
    },
  },
  created() {
    this.tableData = vocabList;
  },
};
</script>

<style scoped>
.container {
  position: relative;
  padding: 1rem 2rem;
  display: flex;
}

.word-list {
  width: 100%;
}

.item-row {
  display: flex;
  gap: 1rem;
  align-items: baseline;
  font-family: "Kalam", cursive;
}

.item-word {
  font-size: 1.2rem;
  font-weight: 600;
}

.item-pos {
  color: lightcoral;
}

.vocab-card {
  width: 90%;
  height: 80vh;
  position: absolute;
  top: 0;
  right: 5%;
  bottom: 0;
  left: 6%;
  z-index: 9;
  background-image: url("../assets/parchment2.jpg");
  background-size: cover;
}
</style>
