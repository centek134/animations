import {React, useState} from "react";
import './assets/scss/containers/app/app.css';
import {Routes, Route} from  'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import MenuAnimated from './containers/MenuAnimated/MenuAnimated';
import HomePage from './containers/HomePage/HomePage.js';
import Cube from './containers/Cube/Cube';

const App = () => {
const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <Sidebar setShow = {setShowSidebar} show={showSidebar} />
      <div className={showSidebar?"content_wrapper hide":"content_wrapper"}>
      <div onClick={() => setShowSidebar(!showSidebar)} className="mobile_menu_icon"></div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu-animated' element={<MenuAnimated/>}/>
        <Route path='/cube' element={<Cube/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
