// src/Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../components/LandingPage';
import SignUp from '../components/SignUp';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;
