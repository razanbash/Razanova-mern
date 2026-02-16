import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingHome from "./components/Home/LandingHome.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import RoutinePage from "./pages/RoutinePage.jsx";
import AssessmentPage from "./pages/AssessmentPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import AdminDashboard from "./pages/AdminDashboard.jsx";
import ContentManagerPage from "./pages/ContentManagerPage.jsx";
import AdminSettingPage from "./pages/AdminSettingPage.jsx";

import ExpertDashboard from "./pages/ExpertDashboard.jsx";
import ExpertAssessmentsPage from "./pages/ExpertAssessmentsPage.jsx";
import ExpertNotesPage from "./pages/ExpertNotesPage.jsx";
import ExpertFeedbackPage from "./pages/ExpertFeedbackPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Header />

        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/routine"
            element={
              <ProtectedRoute>
                <RoutinePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <AssessmentPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content"
            element={
              <ProtectedRoute allowRoles={["admin"]}>
                <ContentManagerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allowRoles={["admin"]}>
                <AdminSettingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/expert/dashboard"
            element={
              <ProtectedRoute allowRoles={["expert"]}>
                <ExpertDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expert/assessments"
            element={
              <ProtectedRoute allowRoles={["expert"]}>
                <ExpertAssessmentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expert/notes"
            element={
              <ProtectedRoute allowRoles={["expert"]}>
                <ExpertNotesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expert/feedback"
            element={
              <ProtectedRoute allowRoles={["expert"]}>
                <ExpertFeedbackPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
