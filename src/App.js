import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=>{
  const apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = '148441453de0476a9e793cde9e156701'
    return (
      <>
        <Router>
          <Navbar />
            <Routes>
              <Route path="/"element={<News apiKey={apiKey} key="general" pagesize="12" country="in" category="general" />}/>
              <Route exact path="/business"element={<News apiKey={apiKey} key="business" pagesize="12" country="in" category="business" />}/>
              <Route exact path="/sports"element={<News apiKey={apiKey} key="sports" pagesize="12" country="in" category="sports" />}/>
              <Route exact path="/technology" element={<News apiKey={apiKey} key="news" pagesize="12" country="in" category="technology"/>} />
              <Route exact path="/health" element={<News apiKey={apiKey} key="health" pagesize="12" country="in" category="health" />}/>
              <Route exact path="/science"element={<News apiKey={apiKey} key="science" pagesize="12" country="in" category="science" />}/>
              <Route exact path="/entertainment"element={<News apiKey={apiKey} key="entertainment" pagesize="12" country="in" category="entertainment" />}/>
            </Routes>
        </Router>
      </>
    )
  }
export default App 