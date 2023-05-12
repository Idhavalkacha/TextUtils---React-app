import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// jsx is kind of HTML that is written inside the APP function or we can say we can write javascript inside html using {},
// this is what called jsx we can write the html and js both inside .js extension file.
// tabIndex, className, htmlFor -> These keywords are chnaged in jsx.
// We can only return only one element, but if we want to return more than one then use jsx fragment. like this <> </>

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)      
    }, 1500);    
  }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#061730';
        document.title = 'TextUtils - Dark Mode'
        // showAlert("Dark mode enabled!", "success");
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.title = 'TextUtils - Light Mode'
        // showAlert("Dark mode disabled!", "success");
    }
  }

  const blackColor = () => {
    document.body.style.backgroundColor = 'black';
    setMode('dark');
  }

  const blueColor = () => {
    document.body.style.backgroundColor = 'rgb(122 168 225)';
    setMode('dark');
  }

  const greyColor = () => {
    document.body.style.backgroundColor = 'rgb(116 116 116)';
    setMode('dark');
  }
    
  return (
    <> 
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} blackColor={blackColor} blueColor={blueColor} greyColor={greyColor}/>
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}


export default App;
