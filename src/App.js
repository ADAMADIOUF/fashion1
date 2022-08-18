import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Boutique from './component/pages/Boutique';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home'
import SingleBoutique from './component/pages/SingleBoutique';
import Tenu from './component/pages/Tenu';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boutique' element={<Boutique />} />
        <Route path='/tenu' element={<Tenu />} />

        <Route path='/singleBoutique/:id' element={<SingleBoutique />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
