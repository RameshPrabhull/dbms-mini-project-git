import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './comp/Home';
import Layout from './comp/layout';
import Employee from './comp/employee';
import Customer from './comp/customer';
import Animalguide from './comp/animalguide';
import Animal from './comp/animal';
import Query from './comp/query';
import Zoo from './comp/zoo';
import Customerrec from './comp/customerrec';
import Animalguiderec from './comp/animalguiderec';
import Animalrec from './comp/animalrec';
import Employeerec from './comp/employeerec';
import Zoorec from './comp/zoorec';
import Landing from './comp/landing';
import Userportal from './comp/userportal';
import User from './comp/user';
import './App.css';
function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState(0);
  const [add,setAdd]=useState('');
  const [id,setId]=useState(0);
  function callback(name,email,phone,address,cid){
    setAdd(address);
    setEmail(email);
    setName(name);
    setPhone(phone);
    setId(cid);
  }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
              <Route path="user" element={<User parentfunction={callback}/>}/>
                <Route path="userportal" element={<Userportal name={name} email={email} phone={phone} add={add} id={id} />}/>
              <Route path="admin" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="employee" element={<Employee/>}/> 
                  <Route path="customer" element={<Customer/>}/>
                  <Route path="zoo" element={<Zoo/>} /> 
                  <Route path="animalguide" element={<Animalguide/>}/>
                  <Route path="animal" element={<Animal/>}/>
                  <Route path="query" element={<Query/>}/>
                  <Route path="customerrec" element={<Customerrec/>}/>
                  <Route path="animalrec" element={<Animalrec/>}/>
                  <Route path="animalguiderec" element={<Animalguiderec/>}/>
                  <Route path="employeerec" element={<Employeerec/>}/>
                  <Route path="zoorec" element={<Zoorec/>}/>
              </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
