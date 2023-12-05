import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FilterCheckboxes from './filter_checkboxes';
import { PeriodCodes, Distribs } from '../constants/filter_codes';

const Filter = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [periodFilters, setPeriodFilters] = React.useState([]);
  const [distribFilters, setDistribFilters] = React.useState([]);


  const togglePeriodFilter = (code) => {
    setPeriodFilters((prevSelected) => (prevSelected.includes(code)
      ? prevSelected.filter((c) => c !== code)
      : [...prevSelected, code]));
  };

  const toggleDistribFilter = (code) => {
    setDistribFilters((prevSelected) => (prevSelected.includes(code)
      ? prevSelected.filter((c) => c !== code)
      : [...prevSelected, code]));
  };

  /* eslint-disable quote-props */
  const ApplyFilter = () => {
    const updatedFilter = { '$or': [] };

    if (periodFilters.length > 0) {
      updatedFilter.$or.push({
        'Period Code': { $in: periodFilters },
      });
    }

    if (distribFilters.length > 0) {
      updatedFilter.$or.push({
        'Dist': { $in: distribFilters },
      });
    }
    props.onFilterUpdate(updatedFilter);
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
          <FilterCheckboxes title="Filter By Period:" codes={PeriodCodes} selectedFilters={periodFilters} onToggleFilter={togglePeriodFilter} />
          <FilterCheckboxes title="Filter By Department:" codes={Distribs} selectedFilters={distribFilters} onToggleFilter={toggleDistribFilter} />
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
