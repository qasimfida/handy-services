import "./App.css";
import { SearchProvider } from "./context/SearchContext";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:service" element={<Service />} />
          </Routes>
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
