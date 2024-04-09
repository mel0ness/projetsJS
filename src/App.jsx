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
import Cookies from './pages/Cookies';
import APImeteo from './pages/APImeteo';
import Datas from "./assets/Datas.json";
import { Provider } from "react-redux";
import store from './features/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  let persistore = persistStore(store);
  return (
<Provider store={store}>
<PersistGate persistor={persistore}>
    <Router>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projets" element={<Projects Datas={Datas}/>} />
<Route path="/projets/1" element={<Imc />} />
<Route path="/projets/2" element={<Quizz />} />
<Route path="/projets/3" element={<WikiApp />} />
<Route path="/projets/4" element={<Cookies />} />
<Route path="/projets/5" element={<APImeteo />} />
<Route path="*" element={<Error/>} />
</Routes>
<Footer/>
    </Router></PersistGate></Provider>
   
  )
}

export default App
