import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Flights from "./pages/Flights";

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/passengers" element={<Passengers />} />
                <Route path="/add-flight" element={<AddFlight />} />
                <Route path="/add-passenger" element={<AddPassenger />} />
            </Routes>
        </Router>
    )
}

export default App;