import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import NewFlight from "./pages/NewFlight";
import {Container} from "@mui/material";
import Passengers from "./pages/Passengers";
import NewPassenger from "./pages/NewPassenger";
import FlightDetails from "./pages/FlightDetails";
import React from "react";
import UpdateFlight from "./pages/UpdateFlight";
import UpdatePassenger from "./pages/UpdatePassenger";
import AddPassengerToFlight from "./pages/AddPassengerToFlight";

function App() {

    return (
        <Container align={"center"} fixed>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/flights" element={<Flights/>}/>
                    <Route path="/passengers" element={<Passengers actions={"passengers"}/>}/>
                    <Route path="/add-flight" element={<NewFlight/>}/>
                    <Route path="/add-passenger" element={<NewPassenger/>}/>
                    <Route path="/flight/:flightId" element={<FlightDetails/>}/>
                    <Route path="/update-flight/:flightId" element={<UpdateFlight/>}/>
                    <Route path="/update-passenger/:passengerId" element={<UpdatePassenger/>}/>
                    <Route path="/add-passengers/:flightId" element={<AddPassengerToFlight/>}/>
                </Routes>
            </Router>
        </Container>
    )
}

export default App;