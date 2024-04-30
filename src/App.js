// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextFor from './Components/TextFor';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode have enabled", "success");
      document.title = 'TextUtils-dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode have enabled", "success");
      document.title = 'TextUtils-light mode';
    }
  }



  return (
    <>

      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >     
          <TextFor showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />         
      </div>
   

    </>
  );
}

export default App;

