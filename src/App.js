
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Body/Container'
import Header from './Header/Header'
import Footer from './Footer/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
      {/* <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
