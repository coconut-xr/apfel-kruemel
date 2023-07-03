import { Fonts, Scale } from "@coconut-xr/apfel-kruemel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonPage from "./pages/Button";
import CheckboxPage from "./pages/Checkbox";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="tabs">
          <NavLink to="/button" className="tab">
            Button
          </NavLink>
          <NavLink to="/checkbox" className="tab">
            Checkbox
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
                    <Route path="/button" element={<ButtonPage />} />
                    <Route path="/checkbox" element={<CheckboxPage />} />
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
