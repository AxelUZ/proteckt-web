import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
      <Route path="/terminos-y-condiciones" element={<Terms />} />
    </Routes>
  );
}

export default AppRouter;