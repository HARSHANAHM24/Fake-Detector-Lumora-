import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Analyze from "./pages/Analyze/Analyze";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Welcome />}
        />

        <Route
          path="/analyze"
          element={<Analyze />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;