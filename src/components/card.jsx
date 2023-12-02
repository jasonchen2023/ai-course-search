// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const CourseCard = ({
//   department, courseNumber, title, instructor, description,
// }) => {
//   return (
//     <div className="card">
//       <Card variant="plain" sx={{ width: '100%' }}>
//         <CardContent>
//           <Typography variant="h6" component="div">
//             {department} {courseNumber}: {title}
//           </Typography>
//           <Typography class="instructor-div" variant="h7" sx={{ mb: 1.5 }} color="text.secondary">
//             Instructor: {instructor}
//           </Typography>
//           <Typography variant="body2">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

import React from 'react';

const CourseCard = ({
  department, courseNumber, title, instructor, description,
}) => {
  return (
    <div className="card">
      <div className="course-card">
        <div className="card-content">
          <p className="course-title">{department} {courseNumber}: {title}</p>
          <p className="instructor">Instructor: {instructor}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
