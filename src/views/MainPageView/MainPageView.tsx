import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationComponent from '../../components/Navigation/NavigationComponent';

export class MainPageView extends Component {
    render() {
        return (
            <div>
                <NavigationComponent />
                {/* <h3>mainpage</h3> */}
                <Outlet />
            </div>
        );
    }
}

export default MainPageView;
