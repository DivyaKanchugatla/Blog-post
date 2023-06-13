import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from './components/PostDetails';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
