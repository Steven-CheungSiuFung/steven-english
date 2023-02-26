import { useSideBarStore } from "./sideBar";
import { useCoverStore } from "./cover";
import { useVocabCardStore } from "./vocabCard";
import { useVocabsStore } from "./vocabs";

export const usePiniaStore = {
  useCoverStore,
  useSideBarStore,
  useVocabsStore,
  useVocabCardStore,
};
