import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import AIPage from './AIPage';
import DogBreedPage from './DogBreedPage';
import ReportPage from './ReportPage';

function MyRoutes() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/about' element={<About />}/>
        <Route path = '/contact' element={<Contact />}/>
        <Route path="/ai" element={<AIPage />} />
        <Route path="/dog-breed" element={<DogBreedPage />} />
        <Route path="/report" element={<ReportPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default MyRoutes