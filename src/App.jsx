import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayOut from "./compontnts/RootLayOut";
import Login from "./compontnts/Login";
import SingUp from "./compontnts/SingUp";
import DashBoard from "./compontnts/DashBoard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<h1>hello people </h1>} />
        <Route path="auth">
          <Route path="register" element={<SingUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dashboard" element={<DashBoard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
