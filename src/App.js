import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/common/heading/Header.jsx";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
