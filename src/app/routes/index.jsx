import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalLoader from 'containers/common/loaders/GlobalLoader';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

// PAGES HERE LIKE BELOW
const Dashboard = lazy(() => import('containers/pages/dashboard'));
const Login = lazy(() => import('containers/pages/auth/login'));
const ForgotPassword = lazy(() => import('containers/pages/auth/forgotPassword'));


function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path="/">
            <Route path="auth" element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route path="/" element={<PrivateRoutes />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
