import React, { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import "./App.css";

// Import componants
import NavigationBar from './componants/NavigationBar';
import Footer from './componants/Footer';
// import PagePagination from './componants/PagePagination';

// Import Pages
import Home from './pages/Home';
import CountryShow from './pages/CountryShow';

const App = () => {

    const [searchTerm, setSearchTerm] = useState('')

    // Changing background colour
    useEffect(() => {
        document.body.style.backgroundColor = "#f7f1e4";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <Router>
            <NavigationBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <br/>
            {/* <PagePagination 
                total={totalPages} 
                current={currentPage} 
                onPageChange={handlePageChange} 
            /> */}
            <Routes>
                <Route path='/' element={<Home searchTerm={searchTerm}/>}/>
                <Route path="/country/:countryName" element={<CountryShow />} />
                {/* <Footer/> */}
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App;