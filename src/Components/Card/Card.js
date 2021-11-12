import "./Card.scss";
const Card = (props) =>{
    const movie = props.movie;
     return(
         <div className="card">
         <div className="card-head">
             <div className="card-head_vote"><span className="card-head_vote-up"> </span>{movie.totalVoted} <span className="card-head_vote-down"> </span></div>
             <div className="card-head_poster"><img src={movie.poster} alt={movie.title}/></div>
             <div className="card-head_info">
                 <h1>{movie.title}</h1>
                 <div><span>Genre:</span> {movie.genre}</div>
                 <div><span>Director:</span> {JSON.stringify(...movie.director).replace(/['"]+/g, '')}</div>
                 <div className="card-head_info-starring"><span>Starring:</span> {JSON.stringify(...movie.stars).replace(/['"]+/g, '')}</div>
                 <div><span>Mins</span> | <span>{movie.language}</span> | <span>date</span></div>
                 <div className="card-head_info-views"><span>{movie.pageViews} views</span> | <span>Voted by {movie.totalVoted} People</span></div>
             </div>            
         </div>
         <div div className="card-trailer">
             <span>Watch trailer</span>
         </div>
         </div>
     )
 }
 export default Card