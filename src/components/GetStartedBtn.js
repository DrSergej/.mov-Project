import "./GetStartedBtn.css";
import { Link } from "react-router-dom";

const GetStartedBtn = () => {
  return (
    <Link to="/overview">
      <div className="get-started-btn">
        <button> Get Started </button>
      </div>
    </Link>
  );
};

export default GetStartedBtn;
