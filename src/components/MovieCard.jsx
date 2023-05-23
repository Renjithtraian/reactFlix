import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteBox from './FavouriteBox';

function MovieCard({movie}) {
    const {title,vote_average,poster_path,id} = movie;
  return (
      <div class="movieCard">
         <Link to={`movie/${id}`}>
            <img class="moviePoster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
         </Link>
                <div class="movieCardFooter">
                    <div class="movieCardDetails">
                        <h2 class="movieCardTitle">{title}</h2>
                        <p class="movieCardRating">{vote_average}</p>                
                    </div>
                    <FavouriteBox movie = {movie}/>
                </div>
        </div>
  )
}

export default MovieCard
