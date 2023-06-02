import React, { useEffect, useState } from "react";
import { useFetch } from "./Hooks/usefetch";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  
  const [query, setQuery] = useState("");
  const [differedQuery, setDifferedQuery] = useState("");
  const [data] = useFetch("search/movie", { query: differedQuery });
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      setDifferedQuery(query);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

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
                <li>
                  <img src={item.backdrop_path} alt="" />
                </li>
                <li key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
                  {item.title}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
