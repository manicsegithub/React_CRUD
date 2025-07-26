import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import Create from '../Create/Create';
import Read from '../Read/Read';
import Update from '../Update/Update';

function Layout(){
    return(<>
    <BrowserRouter> 
      <Routes> 
         <Route path='/' element = {<Home />}/>
         <Route path='/Create' element = {<Create />} />
         <Route path='/Read/:id' element = {<Read />} />
         <Route path='/Update/:id' element = {<Update />} />
       </Routes>
    </BrowserRouter>   
   </>)
}

export default Layout;