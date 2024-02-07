import logo from './logo.svg';
import './App.css';
import Viewdata from './components/Viewdata';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import Adddata from './components/Adddata';

function App() {
  return (
    <div className="App">
      {/* <Viewdata/> */}
      <Appbar/>
      <Routes>
        <Route path='/' element={<Viewdata/>}/>
        <Route path='/add' element={<Adddata/>}/>


      </Routes>
    </div>
  );
}

export default App;
