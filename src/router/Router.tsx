import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Counter from "@/pages/Counter";
import FetchData from "@/pages/FetchData";
import App from "@/App";
import LoginPage from "@/pages/LoginPage";
import { AccessControl } from "@/components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/AccessControl" element={<AccessControl />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/FetchData" element={<FetchData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
