import React from 'react';
import './App.css';
// import AllGame from './routes/pages/AllGame';
// import Profile from './routes/pages/profile';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import Header from './component/Header';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <RouterProvider router={Router} />
    </React.StrictMode>
    // <div className="app">
    //   <Header/>
    // </div>
  );
}

export default App;
