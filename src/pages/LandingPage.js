import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="top">
        <iframe className="front"></iframe>
        <iframe className="back"></iframe>
      </section>
      <section className="bottom">
        <h3>
          Enjoy Your Movie <br /> Watch Everywhere
        </h3>
        <p>
          Strem unlimited movies and TV shows <br />
          on your phone, tablet,laptop and TV.
        </p>
        <button>
          <Link to="/overview">Get Started</Link>
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
