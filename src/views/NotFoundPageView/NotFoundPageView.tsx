import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class NotFoundPageView extends Component {
    render() {
        return (
            <div>
                <h3>Not found</h3>
            </div>
        );
    }
}

export default NotFoundPageView;
