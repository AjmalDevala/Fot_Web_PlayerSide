import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import PageNotFound from "./error/PageNotFound";
import ChatPage from "./page/ChatPage";
import Home from "./page/HomePage";
import Login from "./page/LoginPage";
import OtpPage from "./page/OtpPage";
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
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/editProfile" element={<EditProfile />} />

               {/* error Page */}
          <Route path="*" element={<PageNotFound/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
