import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import './MainPageView.scss';

/**
 * https://react-bootstrap.github.io/layout/grid/
 */
export class MainPageView extends Component {
    render() {
        return (
            <div className="app-mainPage">
                <Container>
                    <Row>
                        <Col>
                            <div className="app-mainPage__wrapper">
                                <NavigationComponent />
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainPageView;
