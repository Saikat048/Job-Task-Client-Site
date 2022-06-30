import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ToDo from './Page/Home/ToDo';
import Complete from './Page/Home/Complete/Complete';
import Calendar from './Page/Calendar/Calendar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ToDo></ToDo>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/complete" element={<Complete></Complete>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
