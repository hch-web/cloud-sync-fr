import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalLoader from 'containers/common/loaders/GlobalLoader';
import LayoutWrapper from 'containers/common/layout';
import PublicRoutes from './PublicRoutes';

const Home = lazy(() => import('containers/pages/home'));
const Login = lazy(() => import('containers/pages/auth/login'));
const Signup = lazy(() => import('containers/pages/auth/signup'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path="/">
            <Route path="auth" element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>

            <Route path="/" element={<LayoutWrapper />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
