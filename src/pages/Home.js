import { useEffect, useState } from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
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
      <NavBar />
      <SearchBar />
      {/* <p>{data[0]?.genre_ids[0]}</p> */}
      {data.map((elt, index) => {
        return (
          <p key={index + elt}>
            {`${index + 1} - ${elt.title ? elt.title : elt.name}`}
          </p>
        );
      })}
    </div>
  );
};

export default Home;
