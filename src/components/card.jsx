import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CourseCard = ({
  department, courseNumber, title, instructor, description,
}) => {
  return (
    <div className="card">
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {department} {courseNumber}: {title}
          </Typography>
          <Typography variant="h7" sx={{ mb: 1.5 }} color="text.secondary">
            Instructor: {instructor}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCard;
