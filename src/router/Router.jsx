import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DashboardPage from "../pages/DashboardPage"
import AuthPage from "../pages/AuthPage"
import AdminPage from "../pages/AdminPage"
import PageNoteFound from "../pages/404"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../services/user"
function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
  console.log(data, isLoading, error)
  if (isLoading) <h1>Loading...</h1>
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/*" element={<PageNoteFound />} />
    </Routes>
  )
}

export default Router
