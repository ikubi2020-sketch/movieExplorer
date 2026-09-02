import "./movieCard.css"

export type MoviePropsType = {
  id : number,
  title : string,
  body : string
}


export default function MovieCard(props : MoviePropsType) {
  
  return (
    <div className="movieCard">
        {props.title}
        <hr/>
        {props.body}
    </div>    
  )
}