// import "./App.css";
import Register from "./components/Register";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
