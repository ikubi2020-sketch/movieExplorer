import { create } from "zustand"
import type { MoviePropsType } from "../components/MovieCard"

type MovieListStore = {
  favorite: MoviePropsType[],
  add: (movie: MoviePropsType) => void,
  rem: (id: number) => void
}

export const useMovieStore = create<MovieListStore>((set, get) => ({
  favorite: [],
  add: (movie: MoviePropsType) => {
    if (get().favorite?.find(m => m.id === movie.id)) return;
    set((state) => ({ favorite: [...state.favorite, movie]}))
  },
  rem: (id: number) => set((state) =>({
        favorite : state.favorite.filter(m => m.id !== id)}))}))