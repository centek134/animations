import {React, useState} from "react";
import './assets/scss/containers/App/App.css';
import {Routes, Route} from  "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
// =============== 3D animations imports ===============
import MenuAnimated from "./containers/3d_animations/MenuAnimated/MenuAnimated";
import Cube from "./containers/3d_animations/Cube/Cube";
import Circles from "./containers/3d_animations/Circles/Circles";
import ImageBook from "./containers/3d_animations/ImageBook/ImageBook";
import Sphere from "./containers/3d_animations/Sphere/Sphere";
import Text from "./containers/3d_animations/Text/Text";
import CurvedText from "./containers/3d_animations/CurvedText/CurvedText";
import MovingPillars from "./containers/3d_animations/MovingPillars/MovingPillars";
//=====================================================

//=============== 2D animations imports ===============
import Dots from "./containers/2d_animations/Dots/Dots";
import HideAndSeek from "./containers/2d_animations/HideAndSeek/HideAndSeek";

//=====================================================
const App = () => {
const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setShowSidebar(!showSidebar)} className="wrapper_mobile_menu_btn">
        <div className="mobile_menu_icon"></div>
      </div>
      <Sidebar show={showSidebar} />
      <div className={showSidebar?"content_wrapper hide":"content_wrapper"}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/*3d animations routes */}
        <Route path="/3d-animations/menu-animated" element={<MenuAnimated/>}/>
        <Route path="/3d-animations/cube" element={<Cube/>}/>
        <Route path="/3d-animations/circles" element={<Circles/>}/>
        <Route path="/3d-animations/book" element={<ImageBook/>}/>
        <Route path="/3d-animations/sphere" element={<Sphere/>}/>
        <Route path="/3d-animations/text" element={<Text/>}/>
        <Route path="/3d-animations/curved-text" element={<CurvedText/>}/>
        <Route path="/3d-animations/moving-pillars" element={<MovingPillars/>}/>

        {/*2d animations routes */}
        <Route path="/2d-animations/hide-and-seek" element={<HideAndSeek/>}/>
        <Route path="/2d-animations/dots" element={<Dots/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
