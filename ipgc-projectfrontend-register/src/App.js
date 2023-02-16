import './App.css';
import HomeNavbar from './components/homeNavbar';
import HomeTitle from './components/homeTitle';
import HomeContentIntro from './components/homeContentIntro';
import HomeTable from './components/homeTable';
import HomeFooter from './components/homeFooter';
import HomeContentData from './components/homeContentData';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <HomeTitle />
      <HomeContentIntro />
      <HomeContentData />
      <HomeTable />
      <HomeFooter />
    </div>
  );
}

export default App;
