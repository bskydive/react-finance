import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RoutesComponent from './components/Routes/MainRoutesComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>REFIN</p>
            </header>

            <BrowserRouter>
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
