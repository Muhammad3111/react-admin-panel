import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import './app.scss';


const App = () => {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
};


export default App;