import { create } from 'zustand';

type State = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  hoveredItem: string | null;
  setHoveredItem: (id: string | null) => void;
};

const useStore = create<State>((set) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),
  hoveredItem: null,
  setHoveredItem: (id) => set({ hoveredItem: id }),
}));

export default useStore;