import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class MainPageView extends Component {
    render() {
        return (
            <div>
                <h3>mainpage</h3>
                <Outlet />
            </div>
        );
    }
}

export default MainPageView;
