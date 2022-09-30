import './App.css';
import NavBar from './components/NavBar';
import { Home } from './components/pages/Home'
import { Blog } from './components/pages/Blog'
import { Contact } from './components/pages/Contact'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
        
    </>
  );
}

export default App;
