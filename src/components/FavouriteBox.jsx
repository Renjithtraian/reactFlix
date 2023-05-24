import React,{ useContext } from 'react'
import { AppContext } from './Context/AppContext';
import HeartFilled from "../assets/HeartFilled.svg";
import HeartLined from "../assets/HeartLined.svg";

const FavouriteBox = ({movie}) => {

    const {state,dispatch} = useContext(AppContext)
    
    let favourited = state.favourites.some(item => item.id === movie.id)
    console.log(state);

    const handleFavourite = () => {
      favourited ? dispatch({
        type : "REMOVE_FAVOURITE",
        payload : movie.id
      }) :
        dispatch({
            type:"ADD_FAVOURITE",
            payload:movie,
        })
    }

  return (
    <div class="favButton" onClick={handleFavourite}>
      {
        favourited ?  <img src={HeartFilled} alt="" /> : <img src={HeartLined} alt="" />
      }
       
        
    </div>
  )
}

export default FavouriteBox
