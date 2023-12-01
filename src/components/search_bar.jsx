import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = (props) => {
  const [searchterm, setSearchTerm] = useState('');
  // add this above your return
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.search(event.target.value);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      props.search(searchterm);
    }
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} onKeyPress={onEnterPress} value={searchterm} />
    </div>
  );
};


export default SearchBar;
