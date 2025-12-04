import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Dashboard/Dashboard";   // <-- NEW
import ProtectedRoute from "./ProtectedRoute";         // <-- NEW
import TemplatesPage from "./pages/Templates/TemplatesPage";
import NewEventPage from "./pages/NewEvent/NewEventPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC PAGES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* PROTECTED PAGE */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
          <Route
  path="/templates"
  element={
    <ProtectedRoute>
      <TemplatesPage />
    </ProtectedRoute>
  }
/>

    <Route
  path="/new-event"
  element={
    <ProtectedRoute>
      <NewEventPage />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
