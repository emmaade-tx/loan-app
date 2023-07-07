import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/App.scss';

const Login = lazy(() => import("@/pages/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const UserDetail = lazy(() => import("@/pages/UserDetail"));

const Main = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback="...">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<Dashboard />} />
            <Route path="/dashboard/user/:id" element={<UserDetail />} />
          </Routes>
        </Router>
      </Suspense>  
    </>
  )
}

export default Main;
