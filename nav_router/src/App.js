
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Event from './Event';
import Contact from './Contact';
import Feedback from './Feedback';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} /> 
          <Route path="Event" element={<Event />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
