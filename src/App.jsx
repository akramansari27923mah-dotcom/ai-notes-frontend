import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Input from "./pages/Input";
import Result from "./pages/Result";
import Protect from "./components/Protect";
import Dashboard from "./pages/Dashboard";
import Demo from "./components/Demo";
import PrivacyPolicy from "./components/PrivacyPolicy ";
import Contact from "./components/Contact";
import ChatWithAi from "./pages/ChatWithAi";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />

        {/* protect */}
        <Route
          path="/create"
          element={
            <Protect>
              <Input />
            </Protect>
          }
        />

        {/* protect */}
        <Route
          path="/result"
          element={
            <Protect>
              <Result />
            </Protect>
          }
        />

        {/* protect */}
        <Route
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />

        {/* protect */}
        <Route
          path="/aitutor"
          element={
            <Protect>
              <ChatWithAi />
            </Protect>
          }
        />
        {/* reset password */}
        <Route
          path="/change-password"
          element={
            <Protect>
              <ResetPassword />
            </Protect>
          }
        />

        <Route path="/privatePolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
};

export default App;
