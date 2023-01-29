const vocabs = require("./vocabs.mongo");

async function getAllVocabs() {
  const vocabsList = await vocabs.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
  return vocabsList;
}

async function addNewVocab(vocab) {
  try {
    const result = await vocabs.updateOne(
      {
        word: vocab.word,
      },
      {
        word: vocab.word,
        pos: vocab.pos,
        meaning: vocab.meaning,
        sentences: vocab.sentences,
      },
      {
        upsert: true,
      }
    );
    return result;
  } catch (error) {
    console.error(`Could not save new vocab: ${error}`);
  }
}

module.exports = {
  getAllVocabs,
  addNewVocab,
};
