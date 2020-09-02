import React from 'react';
import Routes from './Routes'
import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'

/** App
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
