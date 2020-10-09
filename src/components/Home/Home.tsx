import React from 'react';
import './Stars.scss';
import './Home.css';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className="home background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title">Hi, I am Davi Hillesheim</h1>
            <p className="intro-subtitle">
                <span></span>
                <strong>
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;