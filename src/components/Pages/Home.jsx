import React,{ useState } from 'react'
import { useFetch } from '../Hooks/usefetch';
import Slider from '../Slider';
import Wrapper from '../Wrapper';
import Loader from '../Loader';
import ErrorMsg from '../ErrorMsg';
import MovieCard from '../MovieCard';
import Pagination from '../Pagination';


function Home() {
    const [page, setPage] = useState(1);

    // [data,loading,error] = useFetch(url,{page:page})  //custome hook
    const [data,loading,error] = useFetch("movie/popular",{page:page});
    const {results,total_pages} = data
  
    console.log(data);
  return (
    <div>
      <Slider/>
      <Wrapper>
        {loading && <Loader/>}
        {error && <ErrorMsg>{error}</ErrorMsg>}
        {!error && !loading && (
          <>
            <h2 class="sectionTitle">Popular Movies </h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={total_pages} />
          </> 
        )}
      </Wrapper>
    </div>
  )
}

export default Home
