import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationComponent.scss';

export class NavigationComponent extends Component {
    render() {
        return (
            <div>
                <nav className="app-nav">
                    <p className="app-logo">REFIN</p>
                    <ul>
                        <li><Link to='/'>Upload</Link></li>
                        <li><Link to='/diagrams'>Diagrams</Link></li>
                        <li><Link to='/transactions'>Transactions</Link></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default NavigationComponent;
