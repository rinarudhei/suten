import { create } from 'zustand';

type UseScoreStoreType = {
  score: number;
  increaseScore: () => void;
  resetScore: () => void;
};
export const useScoreStore = create<UseScoreStoreType>((set) => ({
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));
