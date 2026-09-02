import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import type { MoviePropsType } from "../components/MovieCard" 
import { memo } from "react";
import "./movies.css"


type myUrl = {
  url : string
}

function Movies({url} : myUrl) {
  const [movies, setMovies] = useState<MoviePropsType[]>()
  const [search , setSearch] = useState("")
    useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then(setMovies)
    .catch(e => console.log(e))
  }, [])
  return (
    <div>
          <h1>discover movie</h1>
          <input className="searchMovie" type="text"  placeholder="search movie " onChange={(e)=> setSearch(e.target.value)}/>
    <div className="moviesMain">
     {movies?.map(movie => (<MovieCard key={movie.id} id={movie.id} title={movie.title} body={movie.body}/>))}
     </div>
    </div>
  )
}

export default  memo(Movies)