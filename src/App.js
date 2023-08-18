// CSS
import "./App.css";

// Router
import { NavLink, Route, Routes } from "react-router-dom";

// Components
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            CD-DC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink
                  to="/"
                  class="nav-link"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/work"
                  class="nav-link"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Work
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/education"
                  class="nav-link"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Education
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/education" element={<Education />} />
      </Routes>

      <footer id="footer" class="flex-shrink-0 py-4 text-white-50">
        <div class="container text-center">
          <img
            className="footer-logo"
            src={require("./assets/img/logo-UP.png")}
            alt={"Logo"}
          />
          <p class="mt-5">Phinma - University of Pangasinan</p>
          <p>Colllege of Information Technology</p>
        </div>
      </footer>
    </>
  );
}

export default App;
