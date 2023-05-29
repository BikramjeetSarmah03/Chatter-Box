import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./components/layout/Dashboard";
import Home from "./pages/app/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/auth/Login";

export default function App() {
  const user = true;

  return (
    <Routes>
      <Route
        index
        element={user ? <Navigate to={"/app"} replace /> : <Login />}
      />

      <Route path="app" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="groups" element={<Home />} />
        <Route path="calls" element={<Home />} />
        <Route path="settings" element={<Home />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
