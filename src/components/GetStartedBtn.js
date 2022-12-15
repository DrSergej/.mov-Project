import { Link } from "react-router-dom";
import "./GetStartedBtn.css";

const GetStartedBtn = () => {
	return (
		<Link to="/home">
			<div className="get-started-btn">
				<button> Get Started </button>
			</div>
		</Link>
	);
};

export default GetStartedBtn;
