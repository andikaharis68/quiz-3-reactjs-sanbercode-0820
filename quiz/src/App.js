import React from 'react';
// import './App.css';
import './public/css/style.css'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Navbar from './pages/navbar.jsx'
import { Switch, Route } from 'react-router-dom'
import Movie from './components/movie.jsx'
import Login from './pages/login.jsx'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/movie"><Movie /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
