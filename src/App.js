
import './App.css';
import { createContext } from 'react';
import All from './components/All.js';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About.js';
import contact from './components/Contact.js';
import { Route,Routes } from 'react-router-dom';
export const datacontext = createContext();
function App() {
  return (
    
  <datacontext.Provider value={"Hello Context"}>
   <BrowserRouter >
     <div>
      <All />
      
     </div>
    </BrowserRouter>
  </datacontext.Provider>
  );
}

export default App; 
