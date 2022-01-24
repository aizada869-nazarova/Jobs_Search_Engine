
import './App.css';
import Details from "./components/Details"
import { BrowserRouter,Router } from 'react-router-dom'

import { useState } from 'react'

import HomePage from './components/HomePage';

function App() {
 
  const [searchJobs, setSearchJobs] = useState([])  
  const [searchCompanies, setSearchCompanies] = useState([])
  const [searchCategory, setSearchCategory] = useState([])

  const jobsData = (value) => {
    setSearchJobs(value)
  }

  const companiesData = (value) => {
    setSearchCompanies(value)
  }

 
  
  return (
    <BrowserRouter>
    
      <Router exact path="/" render={(routerProps)=> <HomePage companies={companiesData} jobs={jobsData} {...routerProps}  />} />
      <Router exact path="/details/:id" render={(routerProps)=> <Details  companies={searchCompanies} jobs={searchJobs} {...routerProps}  />} />
    </BrowserRouter>
  );

}

export default App;
