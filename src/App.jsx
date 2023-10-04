import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from './layouts/base';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/:page" Component={Base}/>
      </Routes>
    </Router>
  )
}

export default App
