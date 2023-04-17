import logo from './logo.svg';
import './App.css';
import Gallery from './conponents/Gallery';
import Header from './conponents/Header';
import Main from './conponents/Main';
import Footer from './conponents/Footer';
import SlideShow from './conponents/SlideShow';


function App() {
  return (
    <div className="App">
      <Header/>
      <SlideShow/>
      <Gallery/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;