import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Counter from "@/pages/Counter";
import FetchData from "@/pages/FetchData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/fetchData" element={<FetchData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
