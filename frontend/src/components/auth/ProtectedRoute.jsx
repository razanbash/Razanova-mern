import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowRoles }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token) return <Navigate to="/login" replace />;

  if (allowRoles && allowRoles.length > 0) {
    const role = user?.role;

    if (!role || !allowRoles.includes(role)) {
      if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
      if (role === "expert") return <Navigate to="/expert/dashboard" replace />;
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
}
