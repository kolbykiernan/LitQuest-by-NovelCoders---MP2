import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router
import './StartPage.css'; // Path to your CSS file

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="logo">
        {<div className="logo">
  <img src="/LQLogo.png" alt="LitQuest Logo" />
</div>
}
      </div>
      <h1>Welcome to LitQuest</h1>
      <p>Manage your book list with ease</p>
      <p>Find your next literary adventure efficiently</p>
      <div className="start-buttons">
        <Link to="/search" className="btn btn-primary">Book Search</Link>
        <Link to="/bookshelf" className="btn btn-outline-primary">My Bookshelf</Link>
      </div>
    </div>
  );
};

export default StartPage;
