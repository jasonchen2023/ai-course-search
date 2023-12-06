import React from 'react';

const CourseCard = ({
  department, courseNumber, title, instructor, worldCulture, distrib, period, description,
}) => {
  return (
    <div className="card">
      <div className="course-card">
        <div className="card-content">
          <p className="course-title">{department} {courseNumber}: {title}</p>
          <p className="instructor">{instructor}</p>
          <p className="distribs">
            {Array.isArray(distrib) && distrib.length > 0 && `${distrib.join(' ')} | `}
            {worldCulture !== '' && `${worldCulture} | `}
            {period}
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
