import { useMovieStore } from "../store/FaivertCounts"
import MovieCard from "../components/MovieCard"
import "./favorite.css"


export default function Favorites() {
  const movies = useMovieStore((state)=> state.favorite)
  return (
    <div className="favoriteMain">
      {movies.map((movie)=> <MovieCard key={movie.id} id={movie.id} image={movie.image} name={movie.name} rating={movie.rating} summary={movie.summary}/>)}
    </div>
  )
}
