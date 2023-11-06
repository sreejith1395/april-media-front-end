
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Landingpage from './pages/Landingpage';
import Homepage from './pages/Homepage';
import Watchhistory from './pages/Watchhistory';
function App() {
  return (

<>
    <Header/>  
      <div className="container m-5">
          
     <Routes>

      <Route  path='/' element={ <Landingpage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/watch-history' element={<Watchhistory/>}/>
           
  
     </Routes>
      </div>
      <Footer/>
</>

  );
}

export default App;
