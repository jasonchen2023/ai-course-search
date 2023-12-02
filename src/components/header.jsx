import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <h1 id="website-name"><span className="green-text">Dart</span>Search 🔍</h1>
      <p>A smarter way to discover classes at <a aria-label="Dartmouth link" href="https://dartmouth.edu" target="_blank" rel="noreferrer"><span className="green-text">Dartmouth College</span></a>.
      </p>
      <p>Enter a topic you are interested in exploring. Also try course titles, course numbers, or instructor names.</p>
    </div>
  );
};

export default Header;
