import './App.css';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import SlidingItem from './components/SlidingItem';
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Destination/>
      <Search/>
      <Selects/>
      <SlidingItem/>
      <Footer/>
    </div>

    
    
  );
}

export default App;
