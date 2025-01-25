import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Signin from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/signin" element={<Signin />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;