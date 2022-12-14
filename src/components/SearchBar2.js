import "./SearchBar2.css";
const SearchBar2 = () => {
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };
  return (
    <section className="serach-bar-container">
      <form id="content">
        <input type="text" name="input" className="input" id="search-input" />
        <button
          type="reset"
          className="search"
          id="search-btn"
          onClick={expand}></button>
      </form>
    </section>
  );
};

export default SearchBar2;
