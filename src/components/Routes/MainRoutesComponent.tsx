import React from 'react';
import { Route, Navigate, useRoutes } from 'react-router-dom';

import MainPageView from '../../views/MainPageView/MainPageView';
import TransactionsList from '../TransactionsList/TransactionsListComponent';
import NotFoundPageView from '../../views/NotFoundPageView/NotFoundPageView';
import Diagrams from '../Diagrams/DiagramsComponent';
import UploadComponent from '../Upload/UploadComponent';

/** https://typescript.tv/react/upgrade-to-react-router-v6#React-Router-v6 */
const RoutesComponent: React.FC<unknown> = (): JSX.Element => {
    const mainRoutes = {
        path: '/',
        element: <MainPageView />,
        children: [
            { path: '*', element: <Navigate to="/404" /> },
            { path: '/', element: <UploadComponent /> },
            { path: '404', element: <NotFoundPageView /> },
            { path: 'diagrams', element: <Diagrams /> },
            { path: 'transactions', element: <TransactionsList /> },
        ],
    };

    const routing = useRoutes([mainRoutes]);

    return <>{routing}</>;
};

export default RoutesComponent;
