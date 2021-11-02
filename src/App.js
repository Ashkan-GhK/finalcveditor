import Header from './components/Header';
import MainBody from './components/MainBody';
import TopBar from './components/TopBar';
import './App.css';
import MobileBody from './components/mobileversion/MobileBody';
import MobileVersion from './MobileVersion';

function App() {
  return (
    <div className="app">
      <Header />
      <TopBar/>
      <MainBody/>
      <div className="mobileVersion">
      <MobileVersion />

      </div>
  
    </div>
  );
}
export default App;


