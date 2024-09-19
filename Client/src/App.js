/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Music from './Pages/Music';
import Plays from './Pages/Plays';
import Events from './Pages/Events';
import Sports from './Pages/Sports';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/music' element={<Music/>} > </Route>
      <Route path='/events' element={<Events/>} > </Route>
      <Route path='/plays' element={<Plays/>} > </Route>
      <Route path='/sports' element={<Sports/>} > </Route>
    </Routes>
    </>
    
  );
}

export default App;
