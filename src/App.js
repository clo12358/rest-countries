import React, {useState} from 'react';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';

// Import componants
import NavigationBar from './componants/NavigationBar';

// Import Pages
import Home from './pages/Home';

const App = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <Router>
            <NavigationBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <br></br>
            <Routes>
                <Route path='/' element={<Home searchTerm={searchTerm}/>}/>
            </Routes>
        </Router>
    )
}

export default App;