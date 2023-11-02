import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='header-section'>
        <Header greeting="Welcome" name="Ru" />
      </div>
      <div className='content-section'>
        <div className='main-content'>
          <Main greeting="Hi" name="Ru" />
        </div>
        <div className='sidebar-content'>
          <Sidebar greeting="Howdy" name="Ru" />
        </div>
      </div>
    </div>
  );
}

export default App;
