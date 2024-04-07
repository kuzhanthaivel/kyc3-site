import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Main from './pages/Main';
import SearchBar from "./component/SearchBar.jsx"
import Videobg2 from "./assets/videobg2.mp4";
function App() {
  return (
    <Router>  
     {/* <video className="top-1 z-0" src={Videobg2} autoPlay loop muted/> */}
        <Routes>

        <Route path="/" element={<Main />}></Route>
        {/* <Route path="verify" element={<Verifypage />}></Route> */}
        <Route path="search" element={<SearchBar />}></Route>
        </Routes>
      
    </Router>
  );
}
export default App;