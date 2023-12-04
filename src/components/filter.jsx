import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FilterCheckboxes from './filter_checkboxes';
import { PeriodCodes, DepartmentCodes } from '../constants/filter_codes';

const Filter = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedFilters, setSelectedFilters] = React.useState([]);


  const toggleFilter = (code) => {
    setSelectedFilters((prevSelected) => (prevSelected.includes(code)
      ? prevSelected.filter((c) => c !== code)
      : [...prevSelected, code]));
  };

  const ApplyFilter = () => {
    props.onFilterUpdate(selectedFilters);
    handleClose();
  };

  return (
    <div>
      <button type="button" className="button filter-button" onClick={handleOpen}>
        <FilterAltIcon />
        filters
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="filterContainer">
          <FilterCheckboxes title="Filter By Period:" codes={PeriodCodes} selectedFilters={selectedFilters} onToggleFilter={toggleFilter} />
          <FilterCheckboxes title="Filter By Department:" codes={DepartmentCodes} selectedFilters={selectedFilters} onToggleFilter={toggleFilter} />
          <div id="filter-button-container">
            <button type="button" className="button cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button type="button" className="button apply-button" onClick={ApplyFilter}>
              Apply Filter
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Filter;
