import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./error/PageNotFound";
import ChatPage from "./page/ChatPage";
import Home from "./page/HomePage";
import Login from "./page/LoginPage";
import PricingPage from "./page/PricingPage";
import ProfilePage from "./page/ProfilePage";
import ScoutPage from "./page/ScoutPage";
import Signup from "./page/SignupPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* player pages */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/scout" element={<ScoutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/profile" element={<ProfilePage />} />

               {/* erro Page */}
          <Route path="*" element={<PageNotFound/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
