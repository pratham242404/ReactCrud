//import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nopage from './Nopage.jsx'
import App from './App.jsx'
import Home from './Home.jsx'
import Contactus from './Contactus.jsx'
import Employeeproduct from './Employeeproduct.jsx'
//import Example from './Example.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Nopage from './Nopage.jsx'
import { Employee } from './Employee.jsx';
import Employeeproductbestpractise from './Employeeproductbestpractise.jsx'
import Createemp from './Createemp.jsx';
import Employeeup  from './Employeeup.jsx';
import Employeedel from './Employeedel.jsx'
import Mydel from './Mydel.jsx';
//import Employeeupbestpractise from './Employeeupbestpractise.jsx';
import  Employeedelbest  from './Employeedelbest.jsx';

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 /* <StrictMode>
      <App />
    <Nopage />
  </StrictMode>, */
  


  
    < BrowserRouter >
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Contactus" element={<Contactus />} />
      <Route path="Employeeproduct" element={<Employeeproduct />} />
      <Route path="Employeeproductbestpractise" element={<Employeeproductbestpractise />} />
      <Route path="emp/:id" element={<Employee />}/>
      <Route path="Create" element= {<Createemp/>}/>
      <Route path="empup/:id" element={<Employeeup />} />
      <Route path="empdel/:id" element={<Employeedel/>} />
      <Route path="del" element={<Mydel/>} />
       <Route path="empdelbest/:id" element={<Employeedelbest/>} />
      
      {/* <Route  path="Empupbest/:id" element={<Employeeupbestpractise />}/> */}
      <Route path="*" element={<Nopage />} />
      
    </Route>
  </Routes> </BrowserRouter >   
);


