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
import SignUp from './SignUp'
import FieldSupplier from './FieldSupplier';
import FieldTags from './FieldTags';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Head/>}>
      <Route path='SignUp' element={<SignUp/>}></Route>
      <Route path='FieldSupplier' exact element={<FieldSupplier/>}></Route>
      <Route path='FieldTags' exact element={<FieldTags/>}></Route>
      </Route>
    </Routes>
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