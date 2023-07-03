import { Fonts, Scale } from "@coconut-xr/apfel-kruemel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonsPage from "./pages/Buttons";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="tabs">
          <NavLink to="/buttons" className="tab">
            Buttons
          </NavLink>
        </div>
        <div className="content">
          <Canvas>
            <Environment files="/apartment_4k.hdr" background />
            <pointLight position={[1, 2, 3]} />
            <OrbitControls />
            <Fonts>
              <Scale>
                <Suspense>
                  <Routes>
                    <Route path="/buttons" element={<ButtonsPage />} />
                  </Routes>
                </Suspense>
              </Scale>
            </Fonts>
          </Canvas>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
