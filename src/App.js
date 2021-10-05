import Header from './components/Header';
import MainBody from './components/MainBody';
import TopBar from './components/TopBar';
import './App.css';
import FooterMobile from './FooterMobile';


function App() {
  return (
    <div className="app">
     <div className="app__components">
      <Header />
      <TopBar />
      <MainBody  />
    </div>
    <div className="footermobile">
    <FooterMobile/>

    </div>
    </div>
  );
}

export default App;
