import axios from 'axios';

const baseUrl = 'https://ai-course-search-api.onrender.com';
const sendQuery = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/api/queries`, data);
    return res.data.matches;
  } catch (error) {
    console.error('Error sending axios request:', error);
    throw error;
  }
};

export default sendQuery;
