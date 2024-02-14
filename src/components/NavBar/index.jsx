import "./style.css";
import { Link } from "react-router-dom";

const cardioImages = [
  "cardio/bike.webp",
  "cardio/dumbell-f.jpeg",
  "cardio/push.webp",
  "cardio/pushup-f.webp ",
  "cardio/ropes.jpeg ",
  "cardio/run.jpeg ",
  "cardio/situp-f.webp ",
  "cardio/swim.jpeg ",
  "cardio/tread-f.jpeg ",
  "cardio/tread-f2.webp",
];

function NavBar({updateWorkouts}) {
  return (
    <nav id="NavBar" className="container-fluid  fs-4 fw-bold navbar navbar-expand-lg">
      <a className="navbar-brand text-light" href="#">
        <img
          src="./src/components/NavBar/image/HulkBeasts.jpg"
          alt="Sweat-Beasts"
          width="50"
          height="50"
        ></img>{" "}
        Sweat-Beasts{" "}
      </a>
      <button
        className="navbar-toggler text-bg-light "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link active text-light" to="/" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-light" onClick={() => updateWorkouts({ type: "cardio" }, cardioImages)} aria-current="page">
              Cardio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-light" to="/weights" aria-current="page">
              Weights
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-light" to="/contact" aria-current="page">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
