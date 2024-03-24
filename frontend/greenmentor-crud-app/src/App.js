
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { MainRoute } from './Routes/AllRoute';
import { Loading } from './Components/Loading';
function App() {
const data = useSelector(state=>state)
console.log(data)

  return (
    <div className="App">
      <Navbar/>
  <MainRoute/>
  <Footer/>
    </div>
  );
}

export default App;
