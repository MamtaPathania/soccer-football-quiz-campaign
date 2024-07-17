
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PlayPage from "./components/PlayPage";
import TermsPage from "./components/TermsPage";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path="/soccer-quiz" element = {<HomePage/>}/>
        <Route path="/soccer-quiz/play" element = {<PlayPage/>}/>
        <Route path="/soccer-quiz/terms" element = {<TermsPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
