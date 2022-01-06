import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import FeaturedProjects from "./components/featured_projects";    
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./components/profile";
import AllProjects from "./components/all_projects";
import Contact from "./components/contact";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/featuredprojects" element={<FeaturedProjects />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
