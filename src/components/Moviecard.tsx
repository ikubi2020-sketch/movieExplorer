import { Link } from "react-router"
import "./movieCard.css"

export type MoviePropsType = {
  id : number,
  name : string,
  summary : string,
  image : {
    medium : string,
    original : string
  },
  rating: { average : number},
}


export default function MovieCard(props : MoviePropsType) {
  return (
    <div className="movieCard">
        <img src={props.image.medium} alt="pictor of show" />
        <h1>{props.name}</h1>
        <hr/>
         rating :  {props.rating.average}
        <br />
        {props.summary}
        <br />
        <Link to={`/MovieDetails/${props.id}`}>view</Link>
    </div>    
  )
}