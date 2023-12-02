import React, { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import filter from '../img/icons8-filter-30.png';

// import Modal from './Modal'; // Import your Modal component

const Filter = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFilterClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button type="button" id="filter-button"> <FilterAltIcon />filters</button>
      {/* {isModalOpen && <Modal onClose={handleCloseModal} />} */}
    </div>
  );
};

export default Filter;
