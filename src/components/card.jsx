import React from 'react';

const CourseCard = ({
  department, courseNumber, title, instructor, worldCulture, distrib, period, description,
}) => {
  return (
    <div className="card">
      <div className="course-card">
        <div className="card-content">
          <p className="course-title">{department} {courseNumber}: {title}</p>
          <p className="instructor">Instructor: {instructor}</p>
          <p className="instructor">{distrib}</p>
          <p className="instructor">{distrib}</p>
          <p className="instructor">{distrib}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
