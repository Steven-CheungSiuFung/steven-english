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
export default {
  data() {
    return {
      tableData: [
        {
          word: "resurgent",
          pos: "adjective",
          meaning: "increasing again, or becoming popular again:",
          sentences: [
            "Even pessimistic outlooks point to a resurgent economy in 2021.",
            "There is a resurgent interest in implementing this approach.",
          ],
        },
        {
          word: "intrepid",
          pos: "adjective",
          meaning:
            "extremely brave and showing no fear of dangerous situations:",
          sentences: [
            "Hundreds of intrepid people jumped into the cold waters of Goose Lake on Saturday for the 14th annual Polar Plunge, an event that supports Special Olympics Alaska.",
            "Nobody is taking anything out of these admirable and intrepid people.",
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.word-list {
}

.item-row {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.item-word {
  font-size: 1.2rem;
  font-weight: 600;
}

.item-pos {
  color: lightcoral;
}
</style>
