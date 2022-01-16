import React, { Component } from 'react';
import './NavigationComponent.scss';

export class NavigationComponent extends Component {
    render() {
        return (
            <div>
                <nav className="app-nav">
                    <p className="app-logo">REFIN</p>
                    <ul>
                        <li>Upload</li>
                        <li>Diagrams</li>
                        <li>Transactions</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavigationComponent;
