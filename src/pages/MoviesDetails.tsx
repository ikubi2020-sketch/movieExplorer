import { useParams } from "react-router"
import"./movieDetails.css"
import { useEffect, useState } from "react"
import type { MoviePropsType } from "../components/MovieCard"
import MovieCard from "../components/MovieCard"
import { useMovieStore } from "../store/FaivertCounts"


export default function MoviesDetails() {
 
   const {id} = useParams()
  const newId = Number(id)
  const [movies , setMovies] = useState<MoviePropsType[]>()
  const addFunction = useMovieStore((state)=> state.add)
  useEffect(()=>{
    fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(setMovies)
    .catch(e =>console.log(e))
  }, [])
  const presented = movies?.find(movie => movie.id === newId)
  return (
    <div className="detailsMain">
        <h1 className="headline">{presented?.name} details</h1>
        <hr />
        <div>
          <MovieCard  key={presented?.id} id={presented?.id} rating={presented?.rating} image={presented?.image} name={presented?.name} summary={presented?.summary}/>
        </div>
          <button className="buttonFavorite" type="button" onClick={()=>{if(presented) addFunction(presented)}}> add to favorite</button>
    </div>
  )
}
