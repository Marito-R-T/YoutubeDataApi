import React, {useState} from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [term, setTerm] = useState(""); 

  const onSearchBarSubmit = (termToSearch) => {
    setTerm(termToSearch)
  }

  return (
    <>
      <NavBar onSearchBarSubmit={onSearchBarSubmit}/>
      <Outlet context={[term, setTerm]} />
    </>
  );
}

export default App;
