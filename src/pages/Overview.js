import { useEffect, useState } from "react";
// import { Link, Navigate, Router, useNavigate } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import NavBar from "../components/NavBar";
import SearchBar2 from "../components/SearchBar2";
import "./Overview.css";

const Overview = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const [isLoading2, setIsLoading2] = useState(true);
	let [childData, setChildData] = useState([]);

	let status = null;

	const updateData = (newData) => {
		setChildData([]);
		status = document.getElementById("search-input")?.value;
		if (status != null) {
			setChildData(newData);
			// document.getElementById("search-input").value = null;
		}

		// console.log(status != "");
	};
	// console.log(status);
	// console.log(status != "");
	// console.log(status);
	// renderOverview();
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/week?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
		)
			.then((res) => res.json())
			.then((data) => setData(data.results));
		setIsLoading(false);
	}, []);

	// useEffect(() => {
	// 	renderOverview();
	// }, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	function renderOverview() {
		return (
			<div className="overview-items">
				{childData.length === 0
					? data.map((elt, index) => {
							return <MovieItem key={index + elt} id={elt.id} />;
					  })
					: childData.map((e, index) => {
							return <MovieItem key={index + index} id={e.id} />;
					  })}

				<NavBar />
			</div>
		);
	}

	// function renderOverview() {
	// 	return (
	// 		<div className="overview-items">
	// 			{status != ""
	// 				? childData.map((elt, index) => {
	// 						return <MovieItem key={index + elt} id={elt.id} />;
	// 				  })
	// 				: data.map((elt, index) => {
	// 						return <MovieItem key={index + elt} id={elt.id} />;
	// 				  })}
	// 			<NavBar />
	// 		</div>
	// 	);
	// }

	console.log("Overview", data);
	// console.log("id", data[0]?.id);
	console.log("childData", childData);

	return (
		<div className="overview">
			<SearchBar2
				data={[...data]}
				data2={childData}
				onUpdate2={updateData}
			/>

			{renderOverview()}
			{/*	<div className="overview-items">
      
			 	{status != ""
					? data.map((elt, index) => {
							return <MovieItem key={index + elt} id={elt.id} />;
					  })
					: childData.map((elt, index) => {
							return <MovieItem key={index + elt} id={elt.id} />;
					  })} 
				<NavBar />
			</div>*/}
		</div>
	);
};

export default Overview;
