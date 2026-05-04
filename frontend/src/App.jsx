import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn } = useUser();
  return (
    <>
      <h1 className="text-3xl text-red-600 bg-orange-500 p-10">
        Welcome To MyTalent Prathamesh
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
