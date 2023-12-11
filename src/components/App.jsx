import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import ReactGA from 'react-ga4';
import SearchBar from './search_bar';
import CourseList from './course_list';
import Header from './header';
import Filter from './filter';
import sendQuery from '../services/query';
import loadingGif from '../assets/loading.gif';

const App = (props) => {
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  /* eslint-disable quote-props */
  const [filters, setFilters] = useState({ '$or': [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(filters);
  }, [filters]);


  const updateFilter = (updatedFilter) => {
    setFilters(updatedFilter);
  };

  const search = async (query) => {
    if (query !== '') {
      setSearchQuery(query);
      setLoading(true);

      ReactGA.send({
        hitType: 'event',
        eventCategory: 'Search',
        eventAction: 'Performed',
        eventLabel: query,
      });

      ReactGA.event({
        category: 'Search',
        action: 'Performed',
        label: query,
      });

      const data = {
        query,
        k: 20,
        filter: filters.$or.length === 0 ? null : filters,
      };
      const res = await sendQuery(data);
      setLoading(false);
      setCourseList(res);
    }
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search(searchQuery);
  }, [filters]);


  return (
    <div id="container">
      <Header />
      <div id="search-div">
        <SearchBar search={debouncedSearch} />
        <Filter onFilterUpdate={updateFilter} />
      </div>
      <div id="search-div-mobile">
        <SearchBar search={debouncedSearch} />
        <Filter onFilterUpdate={updateFilter} />
      </div>
      <p className="footnote">*Showing 24W Courses</p>
      {loading && <div id="loadingDiv"><img id="loadingGif" src={loadingGif} alt="Loading..." /></div>}
      {!loading && <CourseList courses={courseList} />}
    </div>
  );
};
export default App;
