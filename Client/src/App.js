/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Music from './Pages/Music';
import Plays from './Pages/Plays';
import Events from './Pages/Events';
import Sports from './Pages/Sports';
import SingleEventPage from './Components/SingleEventPage';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Pages/Profile';
import MyEvent from './Pages/MyEvent';
import EventDetail from './Pages/EventDetail';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/music' element={<Music/>} > </Route>
      <Route path='/events' element={<Events/>} > </Route>
      <Route path='/plays' element={<Plays/>} > </Route>
      <Route path='/sports' element={<Sports/>} > </Route>
      <Route path='/my-event' element={<MyEvent/>} > </Route>
      <Route path='/create-event' element={<EventDetail/>} > </Route>
      <Route path="/events/:id" element={<SingleEventPage category="events" />} />
      <Route path="/music/:id" element={<SingleEventPage category="music" />} />
      <Route path="/plays/:id" element={<SingleEventPage category="plays" />} />
      <Route path="/sports/:id" element={<SingleEventPage category="sports" />} />
      <Route path="/my-profile" element={<Profile/>} />
    </Routes>
    </>
    
  );
}

export default App;
