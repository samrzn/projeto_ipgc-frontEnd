import './App.css';
import HomeNavbar from './components/homeNavbar';
import HomeTitle from './components/homeTitle';
import HomeContentIntro from './components/homeContentIntro';
import HomeTable from './components/homeTable';
import HomeFooter from './components/homeFooter';
import HomeContentApproval from './components/homeContentApproval';
import HomeContentDuration from './components/homeContentDuration';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <HomeTitle />
      <HomeContentIntro />
      <HomeContentApproval />
      <HomeContentDuration />
      <HomeTable />
      <HomeFooter />
    </div>
  );
}

export default App;
