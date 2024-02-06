import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf'; // Make sure the import matches the renamed file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ margin: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}><Button>Book Search</Button></Link>
          <Link to="/bookshelf"><Button>My Bookshelf</Button></Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<BookSearch />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
