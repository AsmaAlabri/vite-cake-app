import "bootstrap/dist/css/bootstrap.css"
import Home from "./comps/Home"
import About from "./comps/About"
import Services from "./comps/Services"
import AddCake from "./comps/AddCake"
import Contact from "./comps/Contact"
import Error from "./comps/Error"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Show from "./comps/Show"
import ShowCards from "./comps/ShowCards"
import DelCake from "./comps/DelCake"
import EditCake from "./comps/EditCake"

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <nav className="navbar bg-warning justify-content-end fixed-top">
            <ul className="nav">
              <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
              <li className="nav-item"><Link to="/abo" className="nav-link">ABOUT US</Link></li>
              <li className="nav-item"><Link to="/ser" className="nav-link">SERVICES</Link></li>
              <li className="nav-item"><Link to="/con" className="nav-link">CONTACT US</Link></li>
              <li className="nav-item"><Link to="/show" className="nav-link">SHOW CAKES</Link></li>
              <li className="nav-item"><Link to="/cards" className="nav-link">CARDS</Link></li>
              <li className="nav-item"><Link to="/add" className="nav-link">ADD CAKE</Link></li>
              <li className="nav-item"><Link to="/del" className="nav-link">DEL CAKE</Link></li>
              <li className="nav-item"><Link to="/edit" className="nav-link">EDIT CAKE</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abo" element={<About />} />
            <Route path="/ser" element={<Services />} />
            <Route path="/add" element={<AddCake />} />
            <Route path="/con" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/show" element={<Show />} />
            <Route path="/cards" element={<ShowCards />} />
            <Route path="/del" element={<DelCake />} />
            <Route path="/edit" element={<EditCake />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
