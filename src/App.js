import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Head from './Head'
import Article from './Article'
import Body from './Body'
import Poster from './Poster'
import './App.css'
import Verified from './Verified'
import StepsToVerify from './StepsToVerify';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Head/>}/>
    </Routes>
    <Head/>
    <Body/>
    <Article/>
    <Poster/>
    <Verified/>
    <StepsToVerify/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;