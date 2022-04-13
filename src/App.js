import "./App.css";
import { Header } from "./component";
import { PrivateRoute } from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { HomePage, LandingPage, Signin, Signup } from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/homepage" element={<HomePage />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
