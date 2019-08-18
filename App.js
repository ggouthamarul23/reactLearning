import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Message from './Components/Message';
import Counter from './Components/Counter';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Layout from './Components/Layout'

function App() {
  return (
     
    <div className="App">
      
        <Layout></Layout>
      </div>
  );
}

export default App;
