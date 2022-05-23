import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Intro from './Views/Intro';
import Quiz from './Views/Quiz';


function App() {
  return (
    <Router>
      <div className="container-fluid text-center h-100 p-0">
        <Routes>
          <Route path='/' element={<Intro/>} />
          <Route path='/quiz' element={<Quiz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
