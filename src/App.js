import Navbar from "./Pages/Navbar/Navbar"
import Directors from "./Pages/Directors/Directors"
import Home from "./Pages/HomePage/Home"
import Donation from "./Pages/Donation/Donation"
import { Route, Routes } from "react-router-dom"

function App() {
    document.title = 'Saayam';
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Directors" element={<Directors />} />
                <Route path="/Donation" element={<Donation />} />
            </Routes>

        </>
    )

}

export default App