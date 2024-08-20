/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ToDoList from './Pages/ToDoList';
import Contests from './Pages/Contests';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} >
      <Route index element={<Home/>}/>
        <Route path='todolist' element={<ToDoList/>}/>
        <Route path='contests' element={<Contests/>}/>
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
