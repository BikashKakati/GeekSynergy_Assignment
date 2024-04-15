import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"))
const Signup = lazy(() => import("./pages/Signup"))
const Login = lazy(() => import("./pages/Login"))
const CompanyInfo = lazy(() => import("./pages/CompanyInfo"))
function App() {

  return (
    <div className="overflow-hidden">
      <Navbar />
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        autoClose={2000}
        closeOnClick
        rtl={false}
        theme="dark"
        transition={Bounce}
      />
      <main className="max-w-dvw min-h-dvh pb-20">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/company-info" element={<PrivateRoute><CompanyInfo /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
