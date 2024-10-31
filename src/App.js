import React, {useState} from 'react';
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

    // const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = 8; // replace with actual total pages

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //     console.log("Current page set to:", page); // Add this to verify it's updating
    // };

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