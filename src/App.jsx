import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Home from "../src/pages/Home";

function App() {
  return (
    <>
      <main className="bg-slate-300/20">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<ARScene />} /> */}
          </Routes>
        </Router>
      </main>
      
    </>
  );
}

export default App;