import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import NewFlight from "./components/NewFlight";
import {Container} from "@mui/material";
import Passengers from "./pages/Passengers";
import NewPassenger from "./components/NewPassenger";
import FlightDetails from "./pages/FlightDetails";
import React from "react";

function App() {

    return (
        <Container align={"center"} fixed>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/flights" element={<Flights/>}/>
                    <Route path="/passengers" element={<Passengers/>}/>
                    <Route path="/add-flight" element={<NewFlight/>}/>
                    <Route path="/add-passenger" element={<NewPassenger/>}/>
                    <Route path="/flights/:flightId" element={<FlightDetails/>}/>
                </Routes>
            </Router>
        </Container>
    )
}

export default App;