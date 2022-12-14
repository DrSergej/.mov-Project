import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section className="search-bar-wrapper">
      <div className="search-bar-container">
        <input type="text" placeholder="Search..."></input>
        <div className="search"></div>
      </div>
    </section>
  );
};

export default SearchBar;
