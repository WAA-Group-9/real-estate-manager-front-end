import Header from "./components/Header/Header";
import Property from "./components/Property";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import SingleProperty from "./page/SingleProperty";
import Login from "./page/Login";
import Register from "./page/Register";
import AccountSetting from "./page/AccountSetting";
import PersonalInfoPage from "./page/PersonalInfoPage";
import VerifyPage from "./page/VerifyPage";
import WishlistsPage from "./page/WishlistsPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Register/>}></Route>
                    <Route path="/property/:id" element={<SingleProperty/>}></Route>
                    <Route path="/account-settings" element={<AccountSetting/>}></Route>
                    <Route path="/account-settings/personal-info" element={<PersonalInfoPage/>}></Route>
                    <Route path="/verify" element={<VerifyPage />}></Route>
                    <Route path="/wishlist" element={<WishlistsPage />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
