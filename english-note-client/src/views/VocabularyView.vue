<template>
  <div class="container">
    <ul class="word-list">
      <li v-for="item in tableData">
        <div class="item-row">
          <p class="item-word">{{ item.word }}</p>
          <p class="item-pos">{{ item.pos }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { vocabList } from "../../mock/mockData";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {},
  created() {
    this.tableData = vocabList;
  },
};
</script>

<style scoped>
.container {
  padding: 1rem 2rem;
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
</style>
