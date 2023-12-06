import React from 'react';
import CourseCard from './card';

const CourseList = (props) => {
  const { courses } = props; // Renamed to 'courses'
  const courseItems = courses.map((course) => {
    return (
      <div key={course.id}>
        <hr className="divider" />
        <CourseCard
          key={course.id} // Make sure to use a unique key for each course
          department={course.metadata.Department}
          courseNumber={course.metadata['Course Number']}
          title={course.metadata.Title}
          instructor={course.metadata.Instructor}
          worldCulture={course.metadata.WC}
          distrib={course.metadata.Dist}
          period={course.metadata['Period Code']}
          description={course.metadata.Description}
        />
      </div>
    );
  });

  return (
    <div id="course-list">
      {courseItems}
    </div>
  );
};

export default CourseList;
