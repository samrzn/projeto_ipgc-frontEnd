import './App.css';
import HomeNavbar from './components/HomeNavbar';
import HomeTitle from './components/HomeTitle';
import HomeContentIntro from './components/HomeContent';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <HomeTitle />
      <HomeContentIntro />
    </div>
  );
}

export default App;
