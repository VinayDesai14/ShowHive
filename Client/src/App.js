/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} >
      </Route>
    </Routes>
    </>
    
  );
}

export default App;