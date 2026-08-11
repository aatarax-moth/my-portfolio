import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import AllProjectsPage from "./components/AllProjectsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<AllProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;