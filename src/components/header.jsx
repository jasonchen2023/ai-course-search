import React from 'react';
import searchIcon from '../assets/search.png';

const Header = () => {
  return (
    <div id="header">
      <h1 id="website-name"><span className="green-text">Dart</span>Search<img src={searchIcon} id="search-icon" alt="Search Icon" /></h1>
      <p>A smarter way to discover classes at <a aria-label="Dartmouth link" href="https://dartmouth.edu" target="_blank" rel="noreferrer"><span className="green-text">Dartmouth College</span></a>.
      </p>
      <br />
      <p>Describe topics you are interested in exploring. (E.g. I want to learn about 20th century French history). Also try course titles, course numbers, or instructor names.</p>
    </div>
  );
};

export default Header;
