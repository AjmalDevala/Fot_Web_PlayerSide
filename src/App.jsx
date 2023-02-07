import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./error/PageNotFound";
import Login from "./page/LoginPage";
import Signup from "./page/SignupPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* player pages */}

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        {/* <Route path="/PlayerChat" element={<PlayerChat />} /> */}
        {/* <Route path="/PlayerScout" element={<PlayerScout />} /> */}
        {/* <Route path="/PlayerPricing" element={<Pricing />} /> */}
        {/* <Route path="/playerProfile" element={<PlayerProfile />} /> */}

               {/* erro Page */}
          <Route path="*" element={<PageNotFound/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
