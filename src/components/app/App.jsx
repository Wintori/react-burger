import React from 'react';
import AppStyles from './App.module.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import Layout from '../layout/Layout';
import IngredientPage from '../../pages/IngredientPage/IngredientPage';
import { ProtectedRouteElement } from '../ProtectedRouteElement/ProtectedRouteElement';
import { ProtectedRouteElementAuthorized } from '../ProtectedRouteElementAuthorized/ProtectedRouteElementAuthorized';
import ProfileHistory from '../../pages/ProfilePage/ProfileHistory/ProfileHistory';
import Feed from '../../pages/Feed/Feed'

const App = () => {

  return (
    <div className={AppStyles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProtectedRouteElement element={<Home />} />} />
            <Route path="/login" element={<ProtectedRouteElementAuthorized element={<LoginPage />} />} />
            <Route path="/register" element={<ProtectedRouteElementAuthorized element={<RegistrationPage />} />} />
            <Route path="/forgot-password" element={<ProtectedRouteElementAuthorized element={<ForgotPasswordPage />} />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
              <Route path="/profile/orders" element={<ProtectedRouteElement element={<ProfileHistory />} />} />
            </Route>
            <Route path="/ingredients/:id" element={<IngredientPage />} />
            <Route path="/feed" element={<ProtectedRouteElement element={<Feed />} />} />
          </Route>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;