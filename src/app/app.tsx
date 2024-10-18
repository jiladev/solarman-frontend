import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Customer from "../pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
