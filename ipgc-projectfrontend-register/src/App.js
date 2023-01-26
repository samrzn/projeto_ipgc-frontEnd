import './App.css';
import HomeNavbar from './components/HomeNavbar';
import HomeTitle from './components/HomeTitle';
import HomeContentIntro from './components/HomeContent';
import HomeTable from './components/HomeTable';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <HomeTitle />
      <HomeContentIntro />
      <HomeTable />
    </div>
  );
}

export default App;
