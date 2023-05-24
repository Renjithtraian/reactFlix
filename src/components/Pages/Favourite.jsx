import React,{useContext} from 'react'
import { AppContext } from '../Context/AppContext'
import Wrapper from '../Wrapper'
import MovieCard from '../MovieCard'

function Favourite() {
  const {state} = useContext(AppContext)
  return (
    <Wrapper>
      <h2 className='sectionTitle'>Favourite Movies</h2>
      <div className="gallery">
        {
          state.favourites.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        }
      </div>
    </Wrapper>
  )
}

export default Favourite
