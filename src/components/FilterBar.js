import "./FilterBar.css";
const FilterBar = () => {
  return (
    <div className="filter-bar-container">
      {/* <!--    Made by Erik Terwan    -->
<!--   24th of November 2015   -->
<!--        MIT License        --> */}
      <div role="navigation">
        <div id="menuToggle">
          {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
          <input type="checkbox" />

          {/* <!--
    Some spans to act as a hamburger.
    --> */}
          <span></span>
          <span></span>
          <span></span>

          {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
          <ul id="menu">
            <a href="#">
              <li>Placeholder</li>
            </a>
            <a href="#">
              <li>Placeholder</li>
            </a>
            <a href="#">
              <li>Placeholder</li>
            </a>
            <a href="#">
              <li>Placeholder</li>
            </a>
            <a href="#">
              <li>Placeholder</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
