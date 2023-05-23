import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios"
import { useFetch } from './Hooks/usefetch';

function Slider() {

    // const [latestMovies,setLatestMovies] = useState([]);

    const [data] = useFetch("movie/now_playing")

    const {results} = data

    // useEffect(() => {
    //     const fetchData = async() => {
    //        let {data} = await axios({
    //             method:"get",
    //             url:"https://api.themoviedb.org/3/movie/now_playing",
    //             params:{
    //                 api_key:"789c78fcbbf9e9855c0bc97fa0ab5b17"
    //             }
    //         })
    //         setLatestMovies(data.results)
    //     }
    //     fetchData()
    // },[]);

    let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        padding: "15vw",
        breakpoints: {
          640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
            padding: "0",
          },
        },
      };

  return (
    <div>
      <div className="movieSlider">
        <Splide options={splideOptions}>
            {
                results?.map(({backdrop_path,title}) => {
                    return(
                        <SplideSlide>
                            <img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
                            <div className="slideCaption">
                                <h2>{title}</h2>
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </Splide>

      </div>
    </div>
  )
}

export default Slider
