import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import OurProduct from './OurProduct';
import ContactUs from './ContactUs';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home/>} />
          <Route path='OurProducts' element={<OurProduct></OurProduct>}></Route>
          <Route path='ContactUs' element={<ContactUs></ContactUs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
