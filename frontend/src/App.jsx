import "./App.css";
import LandingHome from "./components/Home/LandingHome.jsx";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AssessmentPage from "./pages/AssessmentPage.jsx";
import RoutinePage from "./pages/RoutinePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Header from "./components/layout/Header.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ExpertDashboard from "./pages/ExpertDashboard.jsx";
import PageLayout from "./components/layout/PageLayout.jsx";
import Footer from "./components/layout/Footer.jsx";
import AboutPage from "./pages/AboutPage"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/routine" element={<RoutinePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/expert/dashboard" element={<ExpertDashboard />} />
          <Route path="/PageLayout" element={<PageLayout />} />
           <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
