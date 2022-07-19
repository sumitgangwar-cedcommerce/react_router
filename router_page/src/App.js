
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Cities from './Cities';
import Driver from './Driver';
import Front from './Front';
import Help from './Help';
import Layout from './Layout';
import Partners from './Partners';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Front />}></Route>
       <Route path="Cities" element={<Cities></Cities>}></Route>
       <Route path="Drivers" element={<Driver ></Driver>}></Route>
       <Route path='Blog' element={<Blog />}></Route>
       <Route path='Partners' element={<Partners />}></Route>
       <Route path='Help' element={<Help />}></Route>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
