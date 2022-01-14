import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RoutesComponent from './components/Routes/MainRoutesComponent';
import UploadComponent from './components/Upload/UploadComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>REFIN</p>
            </header>

            <BrowserRouter>
                <UploadComponent />
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
