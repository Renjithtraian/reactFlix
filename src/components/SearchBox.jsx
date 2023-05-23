import React, { useState } from "react";
import { useFetch } from "./Hooks/usefetch";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

  const [query, setQuery] = useState("");
  const  [data] = useFetch("search/movie",{query:query});
  const navigate = useNavigate()

  return (
      <div class="searchBox">
        <input
          class="searchField"
          value={query}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
        />
     
      <div className="resultBox">
        <ul>
            {data?.results?.map((item) => {
                return (
                    <>
                    <li><img src={item.backdrop_path} alt="" /></li>
                    <li key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
                        {item.title}
                    </li>
                    </>
                )
            })}
        </ul>
    </div>
    </div>
  );
};

export default SearchBox;
