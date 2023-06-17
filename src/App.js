import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
   setalert({
    msg:message,
    type:type
   })
  }
  setTimeout(() => {
    setalert(null)
  }, 2000);


  const removeBodyClass = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }
  
  const toggleMode = (cls)=> {
   removeBodyClass();
    document.body.classList.add('bg-'+cls)
     
   if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#276eef'

    showAlert("Dark mode has been enabled","success")

    // document.title = 'TextUtiles - Dark Mode'

    // setInterval(() => {
    //   document.title = 'TextUtiles is Amazing'
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtiles Now'
    // }, 1500);
    
   }else{
    setMode('light')
    document.body.style.backgroundColor = 'white'

    showAlert("Light mode has been enabled","success")

    // document.title = 'TextUtiles - Light Mode'
   }
  }
  return (
    <>  
    
        {/* <Navbar title="HAHAHA"></Navbar> */}
      {/* <Navbar title="Text Utils" aboutTitle="About Us"/> */}

    <Router>
   <Navbar title="Text Utils" mode ={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}></Alert>
     <div className="container my-3">

     <Routes>
          <Route exact path="/about" element={ <About mode = {mode} />}/>
           
         <Route exact path="/" element={<TextFrom showAlert = {showAlert} heading = "Try TextUtiles - Word Counter, Character Counter, Remove extra Space" mode={mode}></TextFrom>}/>
         
        </Routes>

      {/* <About></About> */}
     </div>
     </Router>
    

     



     </> 
   
  );
}

export default App;
