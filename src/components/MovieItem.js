import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";
import addfav from "../imgs/addfav.svg";
import star from "../imgs/star.svg";

const MovieItem = (props) => {
  const [movieItemData, setMovieItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.id}?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieItemData(data));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("movieItemData", movieItemData);
  return (
    <Link to={`/details/${props.id}`}>
      <article className="movie-item">
        <img
          src={`https://image.tmdb.org/t/p/original${movieItemData?.poster_path}`}
          alt={movieItemData.title}
        />
        <div className="movie-data__wrapper">
          <div className="flex-row__one">
            <h2>{movieItemData?.title}</h2>

            <img src={star} alt="" />

            <p>{movieItemData?.vote_average?.toFixed(1)}</p>

            <img src={addfav} alt="" />
          </div>
          <div className="item-details">
            <p>
              <span>•</span>
              {new Date(movieItemData?.release_date).toLocaleDateString(
                "us-EN",
                { year: "numeric" }
              )}
            </p>
            <div className="genres">
              <span>•</span>
              {movieItemData?.genres?.map((elt) => {
                return <p>{`|${elt.name}`}</p>;
              })}
            </div>
            <p>
              <span>•</span>
              {`${(movieItemData?.runtime / 60).toFixed(0)}h ${
                movieItemData?.runtime % 60
              }m`}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieItem;
