import React from 'react';
import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';

import Navar from './layouts/Nav';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navar/>}>
          <Route index element={<Home/>}></Route>
  
         
          <Route path='*' element={<Navigate replace to="/"/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
