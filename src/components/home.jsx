import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import SearchBar from './search_bar';
import sendQuery from '../services/query';
import CourseCard from './card';
// nav welcome  browser router

function Home(props) {
  console.log('in app.jsx');
  const dispatch = useDispatch();
  const [courseList, setCourseList] = useState([]);


  const search = async (searchQuery) => {
    const data = {
      query: searchQuery,
      k: 10,
    };
    const res = await sendQuery(data);
    setCourseList(res);
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  return (
    <div id="home">
      <SearchBar search={debouncedSearch} />


      {courseList.map((course) => (
        <CourseCard
          key={course.id} // Make sure to use a unique key for each course
          department={course.metadata.Department}
          courseNumber={course.metadata['Course Number']}
          title={course.metadata.Title}
          instructor={course.metadata.Instructor}
          description={course.metadata.Description}
        />
      ))}
    </div>
  );
}

export default Home;
