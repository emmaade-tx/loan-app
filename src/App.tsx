import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));

const Main = () => {
  return (
    <Suspense fallback="...">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Suspense>  
  )
}

export default Main;