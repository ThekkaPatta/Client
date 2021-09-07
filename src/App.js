
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Body/Container'
import Header from './Header/Header'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Header'><Header></Header></div>
      <div className='Container'><Container></Container></div>
    </div>
    </BrowserRouter>
  );
}

export default App;
