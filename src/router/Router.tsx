import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Counter from "@/pages/Counter";
import FetchData from "@/pages/FetchData";
import App from "@/App";
import LoginPage from "@/pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetchData" element={<FetchData />} />
      </Routes>
    </BrowserRouter>
  );
}
