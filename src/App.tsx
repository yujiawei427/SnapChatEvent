import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatingEventPage from './pages/CreatingEventPage'
import EventPage from './pages/EventPage';

const App = () => (
  <Routes>
    <Route element={<LandingPage />} path="/" />
    <Route element={<CreatingEventPage />} path="/create" />
    <Route element={<EventPage />} path="/event" />
  </Routes>
);

export default App;
