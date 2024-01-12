import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error from './pages/Error';
import './style/utils/global.scss'

function App() {

  return (

    <Router>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projets" element={<Projects/>} />
<Route path="*" element={<Error/>} />
</Routes>
<Footer/>
    </Router>
   
  )
}

export default App
