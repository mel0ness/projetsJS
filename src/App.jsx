import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error from './pages/Error';
import './style/utils/global.scss'
import Imc from './pages/IMC';
import Quizz from './pages/Quizz';
import WikiApp from './pages/WikiApp';
import Datas from "./assets/Datas.json"

function App() {

  return (

    <Router>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projets" element={<Projects Datas={Datas}/>} />
<Route path="/projets/1" element={<Imc />} />
<Route path="/projets/2" element={<Quizz />} />
<Route path="/projets/3" element={<WikiApp />} />
<Route path="*" element={<Error/>} />
</Routes>
<Footer/>
    </Router>
   
  )
}

export default App
