// import React, { useState } from "react";
// import Wrapper from "./Wrapper";
// import MovieCard from "./MovieCard";
// import Pagination from "./Pagination";
// import Loader from "./Loader";
// import ErrorMsg from "./ErrorMsg";
// import Slider from "./Slider";
// import { useFetch } from "./Hooks/usefetch";


function Main({children}) {
  // const [page, setPage] = useState(1);

  // // [data,loading,error] = useFetch(url,{page:page})  //custome hook
  // const [data,loading,error] = useFetch("movie/popular",{page:page});
  // const {results,total_pages} = data

  // console.log(data);


  // const [popMovies, setPopMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState();

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // console.log(totalPages);

  //WITH TRY CATCH
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let { data } = await axios({
  //         method: "get",
  //         url: "https://api.themoviedb.org/3/movie/popular",
  //         params: {
  //           api_key: "789c78fcbbf9e9855c0bc97fa0ab5b17",
  //           page: page,
  //         },
  //       });
  //       setPopMovies(data.results);
  //       setTotalPages(data.total_pages);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 3000);
  //       //  setLoading(false)
  //     } catch (error) {
  //       console.log(error.message);
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();

  //OLD METHOD WITHOUT TRY CATCH
    //   axios({
    //    method:"get",
    //    url:"https://api.themoviedb.org/3/movie/popular",
    //    params:{
    //      api_key:"789c78fcbbf9e9855c0bc97fa0ab5b17",
    //      page:page
    //    }
    // }).then(({data}) => {
    //   setPopMovies(data.results)
    //   setTotalPages(data.total_pages)
    // })
  // }, [page]);

  return (
    <main>
      {/* <Slider/>
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
      </Wrapper> */}
      {children}
    </main>
  );
}

export default Main;
