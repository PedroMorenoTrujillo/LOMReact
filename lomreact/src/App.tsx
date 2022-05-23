import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { DataProvider } from './Context/dataProvider';
import Intro from './Views/Intro';
import Quiz from './Views/Quiz';
import ResumeQuiz from './Views/Resume';


function App() {
  return (
    <Router>
      <div className="container-fluid text-center h-100 p-0">
        <DataProvider>
          <Routes>
            <Route path='/' element={<Intro/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/resume' element={<ResumeQuiz/>} />
          </Routes>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
