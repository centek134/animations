import './assets/scss/containers/app/app.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Homepage from './containers/HomePage/HomePage.js';
import MenuAnimated from './containers/MenuAnimated/MenuAnimated';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <Homepage/>
    </div>
  );
}

export default App;
