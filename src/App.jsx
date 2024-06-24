import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Ubicaciones } from "./pages/Ubicaciones";
import { Favoritos } from "./pages/Favoritos";
import { useState } from "react";
import Menu from "./components/Menu";

import { FavoritosPage } from "./pages/FavoritosPage";

const initialAuth = null;

function App() {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    setAuth(!auth);
  };

  return (
    <>
      <BrowserRouter>
        <Menu handleAuth={handleAuth} auth={auth} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ubicaciones" element={<Ubicaciones />} />
          <Route path="/favoritos2" element={<FavoritosPage auth={auth} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
