import SignUp from "./components/signup";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Porto from "./components/porto";
import Install from "./components/install";
import Support from "./components/support";
import CallUs from "./components/callus";
import Dashboard from "./components/dashboard/dashboard";
import Users from "./components/dashboard/users";
import UserUpdate from "./components/dashboard/UserUpdate";
import AddUser from "./components/dashboard/adduser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/" element={<Home />} />
        <Route path="/Porto" element={<Porto />} />
        <Route path="/install" element={<Install />} />
        <Route path="/support" element={<Support />} />
        <Route path="/callus" element={<CallUs />} />

        {/* dashboard cods....................................................  */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserUpdate />} />
          <Route path="adduser" element={<AddUser/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
