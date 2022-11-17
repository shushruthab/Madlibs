import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MadlibsForm from './MadlibsForm';
import Story from "./Story";
import SelectStory from './SelectStory';

function App() {
  return (
    <div>
      <h1>Madlibs!</h1>
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<SelectStory />}></Route>
            <Route exact path="/form" element={<MadlibsForm />}></Route>
            <Route exact path="/story" element={<Story />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
