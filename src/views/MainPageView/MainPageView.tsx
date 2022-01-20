import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import './MainPageView.scss';

export class MainPageView extends Component {
    render() {
        return (
            <div className="app-mainPage">
                <div className="app-mainPage__wrapper">
                    <NavigationComponent />
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default MainPageView;
