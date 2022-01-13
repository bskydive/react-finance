import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>REFIN</p>
            </header>

            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
