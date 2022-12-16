import "./FilterBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterResultPage from "../pages/FilterResultPage";

const FilterBar = () => {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    setActive(!isActive);
  };
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [btnValue, setBtnValue] = useState();
  // const [navbarOpen, setNavbarOpen] = useState(false);
  const genreValue = (e) => {
    setBtnValue(e.target.value);
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.results));
    setLoading(false);
  }, [btnValue]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
    // console.log(genres);
  }, []);
  return (
    <section className="filter-bar-wrapper">
      <div
        id="burger-container"
        className={isActive ? "open" : null}
        onClick={toggle}>
        <div id="burger">
          <span> &nbsp;</span>
          <span> &nbsp;</span>
          <span> &nbsp;</span>
          <span> &nbsp;</span>
        </div>
        {/* <div className={isActive ? "show" : "hide"} onClick={toggle}> */}
        <div
          className={`genres-grid-container-${
            isActive ? "showMenu" : "hideMenu"
          }`}>
          {genres?.map((genre, index) => {
            return (
              <div key={index} className="genere-container">
                <Link>
                  <button
                    onClick={genreValue}
                    className={`buttons ${genre.name.replace(" ", "")}`}
                    value={genre.name}>
                    {genre.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <FilterResultPage filteredgenres={genres} />
    </section>
  );
};

export default FilterBar;
