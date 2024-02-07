import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './components/StartPage';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you're using Bootstrap for styling
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';


function App() {
  return (
      <Router>
      <div className="App">
        <nav className="navbar" style={{ margin: '0px' }}>
          {/* Update these Links to use 'to' for navigation */}
          <Link to="/" style={{ marginRight: '0px', color: 'var(--secondary-color)', textDecoration: 'none' }}>Home</Link>
          <Link to="/search" style={{ marginRight: '0px', color: 'var(--secondary-color)', textDecoration: 'none' }}>Book Search</Link>
          <Link to="/bookshelf"style={{ marginRight: '0px', color: 'var(--secondary-color)', textDecoration: 'none' }}>My Bookshelf</Link>
        </nav>
        <Routes>
          {/* Define the root path to point to StartPage */}
          <Route exact path="/" element={<StartPage />} />
          {/* Define other paths */}
          <Route path="/search" element={<BookSearch />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
