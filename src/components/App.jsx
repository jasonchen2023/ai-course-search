import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import SearchBar from './search_bar';
import sendQuery from '../services/query';
import CourseCard from './card';
import CourseList from './course_list';

const App = (props) => {
  const [courseList, setCourseList] = useState([]);


  const search = async (searchQuery) => {
    const data = {
      query: searchQuery,
      k: 10,
    };
    const res = await sendQuery(data);

    // const res = [
    //   {
    //     id: '489',
    //     score: 0.815311491,
    //     values: [],
    //     metadata: {
    //       'Course Number': 1,
    //       Department: 'FREN',
    //       Description: '',
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
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  return (
    <div>
      <SearchBar search={debouncedSearch} />
      <CourseList courses={courseList} />
    </div>
  );
};
export default App;
