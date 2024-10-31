import React, {useState} from 'react';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

// Import componants
import NavigationBar from './componants/NavigationBar';
import Footer from './componants/Footer';

// Import Pages
import Home from './pages/Home';
import CountryShow from './pages/CountryShow';

const App = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <Router>
            <NavigationBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <br/>
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