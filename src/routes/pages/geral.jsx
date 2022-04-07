import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../../pages/Login';
import DashboardPage from '../../pages/Dashboard';

const geral = [
    <Route
        path="/login"
        element={<LoginPage />}
    />,
    <Route
        path="/dash"
        element={<DashboardPage />}
    />
]

export default geral;