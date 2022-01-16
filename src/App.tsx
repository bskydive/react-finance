import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import NavigationComponent from './components/Navigation/NavigationComponent';
import RoutesComponent from './components/Routes/MainRoutesComponent';

function App() {
    return (
        <div className="App">
            <NavigationComponent />

            <BrowserRouter>
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
