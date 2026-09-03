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
  const moviesSearched = movies?.filter( movie => movie.name?.toLowerCase().includes(search) )
    useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then(setMovies)
    .catch(e => console.log(e))
  }, [url])
  return (
    <div>
      <div className="searchBar">
        <h1>discover movie</h1>
        <input className="searchMovie" type="text"  placeholder="search movie" value={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())}/>
      </div>
        <div className="moviesMain">
            {moviesSearched?.map(movie => (<MovieCard key={movie.id} id={movie.id} rating={movie.rating} image={movie.image} name={movie.name} summary={""}/>))}
        </div>
    </div>
  )
}

export default  memo(Movies)