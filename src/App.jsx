import { Home } from "./pages/Home.jsx"
import { NotFound } from "./pages/NotFound.jsx";
import { BookRoutes } from "./pages/BookRoutes.jsx";
import "./styles.css"

import {Route, Routes, Link, NavLink, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

//Always displaying for extra content
{/* <Routes location="/books">
  <Route path="/books" element={<h1>Extra Content</h1>} />
</Routes> */}

//replace for loginpages
//reload to reloadpages
//state{} passing data to URL