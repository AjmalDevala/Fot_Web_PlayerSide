import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import SinglePage from "./components/SinglePage";
import PageNotFound from "./error/PageNotFound";
import ChatPage from "./page/ChatPage";
import Home from "./page/HomePage";
import Login from "./page/LoginPage";
import OtpPage from "./page/OtpPage";
import PricingPage from "./page/PricingPage";
import ProfilePage from "./page/ProfilePage";
import ScoutPage from "./page/ScoutPage";
import Signup from "./page/SignupPage";
import ProtectedRoutes from '../ProtectedRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* player pages */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/chat" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} />
        <Route path="/scout" element={<ProtectedRoutes><ScoutPage /></ProtectedRoutes>} />
        <Route path="/pricing" element={<ProtectedRoutes><PricingPage /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/editProfile" element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>} />
        <Route path="/singlePage" element={<ProtectedRoutes><SinglePage /></ProtectedRoutes>} />

               {/* error Page */}
          <Route path="*" element={<PageNotFound/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
