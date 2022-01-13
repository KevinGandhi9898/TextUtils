import react,{useState} from 'react' ;
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background='grey';
      showAlert('Dark Mode is Enabled','success');
      document.title='TextUtils - Dark Mode';
      // setInterval(()=> {
      //   document.title = 'TextUtils  is Amazing';
      //   }, 2000);
      // setInterval(()=> {
      //   document.title = 'Install TextUtils';
      //   }, 1500);
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert('Light Mode is Enabled','success');
      document.title='TextUtils - Light Mode';
    }  
  }

  const showAlert= (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
  <>
  {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
        {/* <Routes>
            <Route exact path="/about"> */}
                {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter The Text to Analyse" mode={mode}/>
            {/* </Route>
        </Routes> */}
    </div>
  {/* </Router> */}
  
  </>
  );
}

export default App;
