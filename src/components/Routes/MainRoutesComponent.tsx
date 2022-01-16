import React from 'react';
import { Navigate, useRoutes, RouteObject } from 'react-router-dom';

import MainPageView from '../../views/MainPageView/MainPageView';
import TransactionsList from '../TransactionsList/TransactionsListComponent';
import NotFoundPageView from '../../views/NotFoundPageView/NotFoundPageView';
import Diagrams from '../Diagrams/DiagramsComponent';
import UploadComponent from '../Upload/UploadComponent';

/** https://typescript.tv/react/upgrade-to-react-router-v6#React-Router-v6 */
const RoutesComponent: React.FC<unknown> = (): JSX.Element => {
    const mainRoutes: RouteObject = {
        path: '/',
        element: <MainPageView />,
        children: [
            { path: '/', element: <UploadComponent /> },
            // { index: true, element: <Home /> },
            { path: '404', element: <NotFoundPageView /> },
            { path: 'diagrams', element: <Diagrams /> },
            { path: 'transactions', element: <TransactionsList /> },
            { path: '*', element: <Navigate to="/404" /> },
        ],
    };

    const routing = useRoutes([mainRoutes]);

    return <>{routing}</>;
};

export default RoutesComponent;
