import "./LandingPage.css";
import GetStartedBtn from "../components/GetStartedBtn";

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
          Straem unlimited movies and TV shows <br />
          on your phone, tablet, laptop and TV.
        </p>
        <GetStartedBtn />
      </section>
    </div>
  );
};

export default LandingPage;
