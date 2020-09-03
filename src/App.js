import React from 'react';
import Routes from './routes-nav/Routes'
import Navigation from './routes-nav/Navigation'
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
