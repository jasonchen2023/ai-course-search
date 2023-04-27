import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import {
//   BrowserRouter, Routes, Route, NavLink, useParams,
// } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app';
import rootReducer from './reducers';
// const App = () => <div className="test">All the REACT are belong to us!</div>;

// const App = (props) => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/test/:id" element={<Test />} />
//           <Route path="*" element={<FallBack />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };
// export default App;

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };

// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };

// const Test = (props) => {
//   const { id } = useParams();
//   return <div> ID: {id} </div>;
// };

const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
