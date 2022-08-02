import {React, useState} from "react";
import {Routes, Route} from  "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./assets/scss/containers/App/App.css";
// =============== 3D animations imports ===============
import {MenuAnimated, Cube, Circles, ImageBook, Sphere, Text, CurvedText, MovingPillars, Transformer} from "./containers/3d_animations/index";
//=============== 2D animations imports ================
import {HideAndSeek, Dots, HexagonMadness} from "./containers/2d_animations/index";

const App = () => {
const [showSidebar, setShowSidebar] = useState(false);

const animations_route_3d = [
{path:"/3d-animations/menu-animated", element:<MenuAnimated/>},{path:"/3d-animations/cube", element:<Cube/>},{path:"/3d-animations/circles", element:<Circles/>}, 
{path:"/3d-animations/book", element:<ImageBook/>}, {path:"/3d-animations/sphere", element:<Sphere/>}, {path:"/3d-animations/text", element:<Text/>}, {path:"/3d-animations/curved-text", element:<CurvedText/>}, {path:"/3d-animations/moving-pillars", element:<MovingPillars/>},
{path:"/3d-animations/transformer", element:<Transformer/>}];
const animations_route_2d = [{path:"/2d-animations/hide-and-seek", element:<HideAndSeek/>},{path:"/2d-animations/dots", element:<Dots/>},{path:"/2d-animations/hexagon-madness", element:<HexagonMadness/>}];

  return (
    <div className="App">
      <div onClick={() => setShowSidebar(!showSidebar)} className="wrapper_mobile_menu_btn">
        <div className="mobile_menu_icon"></div>
      </div>
      <Sidebar setShow = {() => setShowSidebar(!showSidebar)} show={showSidebar} />
      <div className={showSidebar?"content_wrapper hide":"content_wrapper"}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/*3d animations routes */}
        {animations_route_3d.map(item => <Route path={item.path} element = {item.element}/>)}
        {/*2d animations routes */}
        {animations_route_2d.map(item => <Route path={item.path} element = {item.element}/>)}
      </Routes>
      </div>
    </div>
  );
};

export default App;