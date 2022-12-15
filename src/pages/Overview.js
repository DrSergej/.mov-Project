import { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import "./Overview.css";
import NavBar from "../components/NavBar";
import SearchBar2 from "../components/SearchBar2";

const Overview = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Overview", data);
  console.log("id", data[0]?.id);

  return (
    <div className="overview">
      <SearchBar2 />

      <div className="overview-items">
        {/* <p>{data[0]?.genre_ids[0]}</p> */}
        {data.map((elt, index) => {
          return (
            // <Link>
            <MovieItem
              key={index + elt}
              // poster={elt.poster_path}
              // title={elt.title ? elt.title : elt.name}
              id={elt.id}
            />
            // </Link>
          );
        })}
        <NavBar />
      </div>
    </div>
  );
};

export default Overview;
