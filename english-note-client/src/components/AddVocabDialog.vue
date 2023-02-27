<template>
  <div class="container">
    <div class="title">
      <input
        class="title-input"
        type="text"
        placeholder="Vocabulary"
        v-model="vocabForm.word"
      />
    </div>
    <div class="sub-title">
      <div class="pos">
        <input
          class="pos-input"
          type="text"
          placeholder="POS"
          v-model="vocabForm.pos"
        />
      </div>
    </div>
    <div class="main">
      <div class="meaning">
        <input
          class="meaning-input"
          type="text"
          placeholder="Meaning"
          v-model="vocabForm.meaning"
        />
      </div>
      <div class="sentences">
        <textarea
          rows="4"
          class="sentences-input"
          placeholder="Sentence - 1"
          v-model="vocabForm.sentences[0]"
        />
        <textarea
          rows="4"
          class="sentences-input"
          placeholder="Sentence - 2"
          v-model="vocabForm.sentences[1]"
        />
      </div>
    </div>
    <div class="control-section">
      <div class="form-submit-button" @click.prevent="handleFormSubmit()">
        <Promotion />
      </div>
    </div>
  </div>
</template>

<script>
import { isProxy, toRaw } from "vue";
import { mapStores, mapActions, mapState } from "pinia";
import { usePiniaStore } from "../stores";

export default {
  data() {
    return {
      vocabForm: {
        word: "",
        pos: "",
        meaning: "",
        sentences: ["", ""],
      },
    };
  },
  computed: {
    ...mapStores(usePiniaStore.useVocabCardStore, usePiniaStore.useVocabsStore),
  },
  methods: {
    ...mapActions(usePiniaStore.useVocabCardStore, [
      "addNewVocab",
      "setIsAddVocabDialogOpen",
    ]),
    ...mapActions(usePiniaStore.useVocabsStore, ["getVocabsHTTP"]),
    async handleFormSubmit() {
      try {
        const result = await this.addNewVocab(toRaw(this.vocabForm));
        if (result.ok) {
          await this.getVocabsHTTP();
          this.setIsAddVocabDialogOpen(false);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  padding: 1rem;
}

.title-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  font-family: "Courgette", cursive;
  font-size: 2rem;
  font-weight: 600;
}

.title-input:focus {
  outline: none;
}

.sub-title {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5rem;
  font-family: "Kalam", cursive;
}

.pos {
  padding: 1rem;
}

.pos-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  font-family: "Courgette", cursive;
}

.pos-input:focus {
  outline: none;
}

.phonetic {
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
}

.meaning {
  font-weight: 600;
  line-height: 1.5rem;
  padding-bottom: 2rem;
}

.meaning-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  font-family: "Kalam", cursive;
  font-size: 1.2rem;
  font-weight: 600;
}

.meaning-input:focus {
  outline: none;
}

.sentences {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5rem;
}

.sentences-input {
  background-color: transparent;
  border: 1px dashed black;
  width: 100%;
  text-align: center;
  font-family: "Kalam", cursive;
  font-size: 1.2rem;
}

.sentences-input:focus {
  outline: none;
}

.control-section {
  margin-top: auto;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-submit-button {
  width: 36px;
  height: 36px;
}
</style>
