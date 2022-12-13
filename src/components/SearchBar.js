import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Search..."></input>
      <div className="search"></div>
    </div>
  );
};

export default SearchBar;
