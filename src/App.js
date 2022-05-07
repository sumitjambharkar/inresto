import { useState } from 'react';
import './App.css';
import Home from './Componets/Home';
import Login from './Componets/Login';
import {Router,Routes,Route} from 'react-router-dom';
import Dish from './Componets/Dish'


function App() {
  const [user, setuser] = useState(null)

  return (
    <>
    <Home/>
    {/* <Router>
      <Routes>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path='/dish'>
          <Login/>
        </Route>

        <Route path="/homese">
          <Dish/>
        </Route>

      </Routes>
    </Router> */}
    </>
  );
}

export default App;
