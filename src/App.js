import Button from './components/Button';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import img1 from './user-dead.jpg';
import ToggleModel from './components/ToggleModule';

// way of using css inside jsx file
const mainContent = {
  background: 'lightpink',
  padding: '10px'
}
const imgStyling = {
  width: '100px',
  height: '150px',
  paddingTop: '20px'
}
// adding jsx element using function
function AddImage() {
  const imgUrl = <img style={imgStyling} src={img1}/>
  return imgUrl;
}

function App() {
  
  return (
    <div className="App">
      <div className='header-section'>
        <Header greeting="Welcome" name="Ru" />
      </div>
      <div className='content-section'>
        <div style={mainContent} className='main-content'>
          <Main greeting="Hi" name="Ru" />
          <AddImage />
          <ToggleModel />
        </div>
        <div className='sidebar-content'>
          <Sidebar greeting="Howdy" name="Ru" />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
