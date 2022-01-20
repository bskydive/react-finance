import React from 'react';
import { Route, Navigate, useRoutes } from 'react-router-dom';

import MainPageView from '../MainPageView/MainPageView';
import TransactionsList from '../../components/TransactionsList/TransactionsListComponent';
import NotFoundPageView from '../NotFoundPageView/NotFoundPageView';
import Diagrams from '../../components/Diagrams/DiagramsComponent';
import UploadComponent from '../../components/Upload/UploadComponent';

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
