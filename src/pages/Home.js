import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar2 from "../components/SearchBar2";
import "./Home.css";
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

	console.log("Außerhalb: ", data);
	return (
		<div>
			<SearchBar2 data={[...data]} />
			{/* <p>{data[0]?.genre_ids[0]}</p> */}
			{data.map((elt, index) => {
				return (
					<p key={index + elt}>
						{`${index + 1} - ${elt.title ? elt.title : elt.name}`}
					</p>
				);
			})}
			<NavBar />
		</div>
	);
};

export default Home;
