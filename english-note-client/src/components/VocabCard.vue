<template>
  <div class="container">
    <div class="title">
      {{ cardContent.word }}
    </div>
    <div class="sub-title">
      <div class="pos">
        {{ cardContent.pos }}
      </div>
      <div v-show="cardContent.phonetic" class="phonetic">
        {{ cardContent.phonetic }}
      </div>
    </div>
    <div class="main">
      <div class="meaning">
        {{ cardContent.meaning }}
      </div>
      <div class="sentences">
        <p v-for="sentence in cardContent.sentences">- {{ sentence }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapActions, mapState } from "pinia";
import { usePiniaStore } from "../stores";

export default {
  data() {
    return {
      cardContent: {
        word: "",
        pos: "",
        phonetic: "",
        meaning: "",
        sentences: [],
        imageUrl: "",
      },
    };
  },
  props: {
    word: String,
  },
  computed: {
    ...mapStores(usePiniaStore.useVocabCardStore),
    ...mapState(usePiniaStore.useVocabCardStore, {
      isCardOpen: "getIsVocabCardOpen",
      cardData: "getVocabCardContent",
    }),
  },
  watch: {
    cardData() {
      this.cardContent = { ...this.cardData };
    },
  },
  methods: {
    ...mapActions(usePiniaStore.useVocabCardStore, [
      "setIsVocabCardOpen",
      "setVocabCardContent",
    ]),
    setCardContent(content) {
      this.setVocabCardContent(content);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
  font-family: "Courgette", cursive;
  font-size: 2rem;
  font-weight: 600;
}

.sub-title {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5rem;
  font-family: "Kalam", cursive;
}

.pos {
}

.phonetic {
}

.main {
  display: flex;
  flex-direction: column;
  font-family: "Kalam", cursive;
  font-size: 1.2rem;
  padding-top: 2.5rem;
}

.meaning {
  font-weight: 600;
  line-height: 1.5rem;
  padding-bottom: 2rem;
}

.sentences {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5rem;
}
</style>
