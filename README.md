# DartSearch🔍

A smarter way to discover classes at Dartmouth College 🌲.

Frustrated with the archaic [Dartmouth Timetable](https://oracle-www.dartmouth.edu/dart/groucho/timetable.main), I am developing a more intelligent course catalogue for the Dartmouth Community. This course catalogue searches for courses based on intent rather than relying on exact keywords, allowing students to more courses based on their interests.

## Technologies:

- Python – scraping the Dartmouth Timetable for the course information
- React – building the web application
- Node and Express.js – powering a [backend API](https://github.com/jasonchen2023/ai-course-search-API) to handle the search requests and facilitate the API calls to OpenAI and Pinecone
- [OpenAI Embeddings model](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) –  vectorizing the course descriptions and queries
- [Pinecone](https://www.pinecone.io/) – storing the vectors and search for optimal matches


## Local Setup

To run locally,
`npm install && npm run dev`