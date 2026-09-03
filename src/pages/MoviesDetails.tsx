import { useParams } from "react-router"
import"./movieDetails.css"
import { useEffect, useState } from "react"
import type { MoviePropsType } from "../components/MovieCard"
import MovieCard from "../components/MovieCard"


export default function MoviesDetails() {
  const {id} = useParams()
  const newId = Number(id)
  const [movies , setMovies] = useState<MoviePropsType[]>()
  useEffect(()=>{
    fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(setMovies)
    .catch(e =>console.log(e))
  }, [])
  const presented = movies?.find(movie => movie.id === newId)
  return (
    <div className="detailsMain">
        <h1>movie details</h1>
        <div>
          <MovieCard  key={presented?.id} id={presented?.id} rating={presented?.rating} image={presented?.image} name={presented?.name} summary={presented?.summary}/>
        </div>
    </div>
  )
}
