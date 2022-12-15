import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar2 from "../components/SearchBar2";
import SlideShowContainer from "../components/SlideShowContainer";

const Home = () => {
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
	// console.log("Overview", data);
	// console.log("id", data[0]?.id);
	return (
		<div className="home-page">
			<SearchBar2 />
			<SlideShowContainer />
			{data?.map((elt, index) => {
				return (
					<SlideShowContainer
						key={index + elt}
						id={elt.id}
						// name={elt.title}
						// poster_path={elt.poster_path}
						// rate={elt.vote_average}
					/>
				);
			})}
			<NavBar />
		</div>
	);
};

export default Home;
