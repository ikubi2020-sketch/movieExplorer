import { Link } from "react-router"
import "./movieCard.css"

export type MoviePropsType = {
  id : number | undefined,
  name : string | undefined,
  summary : string | undefined,
  image : {
    medium : string | undefined,
    original : string | undefined
  } | undefined,
  rating: { average : number} | undefined,
}


export default function MovieCard(props : MoviePropsType) {
  return (
    <div className="movieCard">
        <img src={props.image?.medium} alt="pictor of show" />
        <h1>{props.name}</h1>
        <hr/>
         rating :  {props.rating?.average}
        <br />
        {props.summary}
        <br />
        <Link to={`/MovieDetails/${props.id}`}>view</Link>
    </div>    
  )
}