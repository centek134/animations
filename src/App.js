import './assets/scss/containers/app/app.css';
import {Routes, Route} from  'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import MenuAnimated from './containers/MenuAnimated/MenuAnimated';
import HomePage from './containers/HomePage/HomePage.js';
import Cube from './containers/Cube/Cube';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu-animated' element={<MenuAnimated/>}/>
        <Route path='/cube' element={<Cube/>}/>
      </Routes>
    </div>
  );
}

export default App;
