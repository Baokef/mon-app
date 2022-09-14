
import './App.css';
import {Routes, Route} from "react-router-dom";
// import Home from './components/Home/Home';
//import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Compte from "./components/Compte/Compte.js";
 import Accueil from "./components/Accueil/Accueil.js";
// import Page2 from "./components/Page2/Page2";
import Navbar from "./Navbar/Navbar";

import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/compte" element={<Compte />} />
      </Routes>
    </div>
  );
}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Services" element={<Services />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Compte" element={<Compte />} />
//         
//         <Route path="/Page2" element={<Page2 />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
