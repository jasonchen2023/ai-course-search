import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import SearchBar from './search_bar';
import CourseList from './course_list';
import Header from './header';
import Filter from './filter';
import sendQuery from '../services/query';

const App = (props) => {
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  /* eslint-disable quote-props */
  const [filters, setFilters] = useState({ '$or': [] });

  useEffect(() => {
    console.log(filters);
  }, [filters]);


  const updateFilter = (updatedFilter) => {
    setFilters(updatedFilter);
  };

  const search = async (query) => {
    if (query !== '') {
      setSearchQuery(query);
      const data = {
        query,
        k: 10,
        filter: filters.$or.length === 0 ? null : filters,
      };
      const res = await sendQuery(data);


      console.log('search', data, res);

      // const res = [
      //   {
      //     id: '489',
      //     score: 0.815311491,
      //     values: [],
      //     metadata: {
      //       'Course Number': 1,
      //       Department: 'FREN',
      //       Description: 'Studies in such aspects of the cultural heritage as French art, music, and history. Credit for this course is awarded students who have s'
      //       Instructor: 'Maureen Doyle',
      //       Title: 'Introductory French I',
      //     },
      //   },
      //   {
      //     id: '490',
      //     score: 0.809830427,
      //     values: [],
      //     metadata: {
      //       'Course Number': 2,
      //       Department: 'FREN',
      //       Description: '',
      //       Instructor: 'Kelly McConnell',
      //       Title: 'Introductory French II',
      //     },
      //   },
      // ];
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
      <p className="footnote">*Showing 24W Courses</p>
      <CourseList courses={courseList} />
    </div>
  );
};
export default App;
