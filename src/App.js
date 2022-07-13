import {React, useState} from "react";
import "./assets/scss/containers/App/App.css";
import {Routes, Route} from  "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import MenuAnimated from "./containers/3d_animations/MenuAnimated/MenuAnimated";
import HomePage from "./containers/HomePage/HomePage.js";
import Cube from "./containers/3d_animations/Cube/Cube";
import Circles from "./containers/3d_animations/Circles/Circles";
import ImageBook from "./containers/3d_animations/ImageBook/ImageBook";
import Sphere from "./containers/3d_animations/Sphere/Sphere";

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
        <Route path="/3d-animations/menu-animated" element={<MenuAnimated/>}/>
        <Route path="/3d-animations/cube" element={<Cube/>}/>
        <Route path="/3d-animations/circles" element={<Circles/>}/>
        <Route path="/3d-animations/book" element={<ImageBook/>}/>
        <Route path="/3d-animations/sphere" element={<Sphere/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
