// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {

  const [alert, setalert] = useState(null);

  const [mode, setmode] = useState('light');

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      document.title = 'Textutills -Dakmode';
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = 'Textutills -Lightmode';
    }

  }


  return (
    <>
      <Router>
        <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">


          <Routes>
            <Route path="/about" element={ <About mode={mode}  />}>
             
            </Route>
            <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode}
                showalert={showalert} />}>
              
            </Route>

          </Routes>


        </div>

      </Router>


    </>
  );
}

export default App;





























