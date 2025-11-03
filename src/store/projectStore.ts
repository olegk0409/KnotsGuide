
import { create } from 'zustand';
import { Difficulty, Knot } from '../utils/types';

type Store = {
  selectedKnot: Knot | null;
  categoryFilter: string;
  difficultyFilter: string | Difficulty;
  lineFilter: string;
  setSelectedKnot: (item: Knot | null) => void;
  setCategoryFilter: (item: string) => void;
  setDifficultyFilter: (item: Difficulty | string) => void;
  setLineFilter: (item: string) => void;
}

const useProjectStore = create<Store>((set) => ({
  selectedKnot: null,
  categoryFilter: '',
  difficultyFilter: '',
  lineFilter: '',
  setSelectedKnot: (selectedKnot) => set({ selectedKnot }),
  setCategoryFilter: (categoryFilter) => set({categoryFilter}),
  setDifficultyFilter: (difficultyFilter) => set({difficultyFilter}),
  setLineFilter: (lineFilter) => set({lineFilter}),
}))

export default useProjectStore;