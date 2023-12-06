import React from 'react';
import Typography from '@mui/material/Typography';

const FilterCheckboxes = ({
  title, codes, selectedFilters, onToggleFilter,
}) => {
  const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => arr.slice(index * size, (index + 1) * size));

  const codeRows = chunkArray(codes, 8);
  const mobileCodeRows = chunkArray(codes, 4);

  return (
    <>
      <div className="filter-title">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
      </div>

      <div className="checkbox-container">
        {codeRows.map((row, rowIndex) => (
        /* eslint-disable-next-line react/no-array-index-key */
          <div key={rowIndex} style={{ display: 'flex', marginBottom: 8 }}>
            {row.map((code) => (
              <label htmlFor={`${title}-filter-${rowIndex}-${code}`} key={code} style={{ marginRight: 16 }}>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id={`${title}-filter-${rowIndex}-${code}`}
                  checked={selectedFilters.includes(code)}
                  onChange={() => onToggleFilter(code)}
                />
                {code}
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="checkbox-container-mobile">
        {mobileCodeRows.map((row, rowIndex) => (
        /* eslint-disable-next-line react/no-array-index-key */
          <div key={rowIndex} style={{ display: 'flex', marginBottom: 8 }}>
            {row.map((code) => (
              <label htmlFor={`${title}-filter-${rowIndex}-${code}`} key={code} style={{ marginRight: 16 }}>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id={`${title}-filter-${rowIndex}-${code}`}
                  checked={selectedFilters.includes(code)}
                  onChange={() => onToggleFilter(code)}
                />
                {code}
              </label>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterCheckboxes;

