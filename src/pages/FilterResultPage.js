import SearchBar2 from "../components/SearchBar2";
import MovieItem from "../components/MovieItem";

import "./FilterResultPage.css";
const FilterResultPage = (props) => {
  return (
    <>
      {/* <SearchBar2 /> */}
      <div>
        {props.filteredgenres.map((ele, index) => {
          {
            {
              /* return <MovieItem key={index} />; */
            }
          }
        })}
      </div>
    </>
  );
};

export default FilterResultPage;
