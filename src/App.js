
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';
// import Search from './components/Search';

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Student/>
    {/* <Routes>
        <Route path="root" component={<Student/>} />
    </Routes> */}
    </div>
  );
}

export default App;