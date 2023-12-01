import axios from 'axios';

const sendQuery = async (data) => {
  try {
    const res = await axios.post('http://localhost:9090/api/queries', data);
    return res.data.matches;
  } catch (error) {
    console.error('Error sending axios request:', error);
    throw error;
  }
};

export default sendQuery;
