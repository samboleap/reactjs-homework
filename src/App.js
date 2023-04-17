import logo from './logo.svg';
import './App.css';
import Navbar from './conponent/Navbar';
import Slideshow from './conponent/Slideshow';
import Main from './conponent/Main';
import Footer from './conponent/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Slideshow />
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
