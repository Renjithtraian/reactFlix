import React,{ useContext } from 'react'
import { AppContext } from './Context/AppContext'

const FavouriteBox = ({movie}) => {

    const {state,dispatch} = useContext(AppContext)
    
    const handleFavourite = () => {
        dispatch({
            type:"ADD_FAVOURITE",
            payload:movie,
        })
    }

  return (
    <div class="favButton" onClick={handleFavourite}>
        #
    </div>
  )
}

export default FavouriteBox
