import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieTrailerPage.css";

const MovieTrailerPage = () => {
	const [movieTrailer, setMovieTrailer] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	let { id } = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovieTrailer(data.results);
				setIsLoading(false);
			});
	}, [id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="movie-trailer__page">
			{movieTrailer.map((elt, index) => {
				if (elt?.type === "Trailer") {
					return (
						<iframe
							key={index + elt}
							width="550"
							height="325"
							src={`https://www.youtube.com/embed/${elt?.key}`}
							title="Official Trailer"
							// frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					);
				}
			})}
			{/* <video controls autoplay width="550" height="auto">
				<source
					src={`https://www.youtube.com/watch?v=${movieTrailer?.key}`}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video> */}
		</div>
	);
};

export default MovieTrailerPage;
