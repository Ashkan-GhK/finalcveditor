import Header from './components/Header';
import MainBody from './components/MainBody';
import TopBar from './components/TopBar';
import './App.css';
import MobileBody from './components/mobileversion/MobileBody';


function App() {
  return (
    <div className="app">
      <Header/>
      <TopBar/>
      <MainBody/>
      <MobileBody />
  
    </div>
  );
}
export default App;
