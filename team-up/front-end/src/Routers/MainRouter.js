// src/Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../components/LandingPage';
import SignUp from '../components/SignUp';
import Navheader from '../components/navheader'

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navheader />
            <Routes>
                <Route exact path="/TEAMUP" element={<LandingPage />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;
