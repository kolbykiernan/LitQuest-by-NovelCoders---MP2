import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './components/StartPage';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you're using Bootstrap for styling
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';


function App() {
  return (
      <Router>
      <div className="App">
        <Navbar bg="var(--primary-color)" expand="lg">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Dropdown menu */}
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <span className="navbar-toggler-icon"></span> {/* Hamburger icon */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* Dropdown links */}
              <Dropdown.Item href="/" style={{ marginRight: '0px', color: 'var(--primary-color)', textDecoration: 'none' }}>Home</Dropdown.Item>
              <Dropdown.Item href="/search" style={{ marginRight: '0px', color: 'var(--primary-color)', textDecoration: 'none' }}>Book Search</Dropdown.Item>
              <Dropdown.Item href="/bookshelf"style={{ marginRight: '0px', color: 'var(--primary-color)', textDecoration: 'none' }}>My Bookshelf</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
      </Navbar.Collapse>
    </Navbar>
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
