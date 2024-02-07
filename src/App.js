import Header from "./components/Header/Header";
import Property from "./components/Property";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import SingleProperty from "./page/SingleProperty";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<SingleProperty />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
