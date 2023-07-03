import { Fonts, Scale } from "@coconut-xr/apfel-kruemel";
import { RootContainer } from "@coconut-xr/koestlich";
import { XWebPointers, noEvents } from "@coconut-xr/xinteraction/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonPage from "./pages/Button";
import CheckboxPage from "./pages/Checkbox";
import InputPage from "./pages/Input";
import ListPage from "./pages/List";
import SliderPage from "./pages/Slider";
import TabsPage from "./pages/Tabs";

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
          <NavLink to="/input" className="tab">
            Input
          </NavLink>
          <NavLink to="/list" className="tab">
            List
          </NavLink>
          <NavLink to="/tabs" className="tab">
            Tabs
          </NavLink>
          <NavLink to="/slider" className="tab">
            Slider
          </NavLink>
        </div>
        <div className="content">
          <Canvas events={noEvents}>
            <Environment files="/apartment_4k.hdr" background />
            <pointLight position={[-3, 3, 3]} />
            <OrbitControls enableRotate={false} />
            <XWebPointers />
            <Fonts>
              <Scale>
                <RootContainer
                  anchorX="center"
                  anchorY="center"
                  precision={0.01}
                >
                  <Suspense>
                    <Routes>
                      <Route path="/button" element={<ButtonPage />} />
                      <Route path="/checkbox" element={<CheckboxPage />} />
                      <Route path="/input" element={<InputPage />} />
                      <Route path="/list" element={<ListPage />} />
                      <Route path="/tabs" element={<TabsPage />} />
                      <Route path="/slider" element={<SliderPage />} />
                    </Routes>
                  </Suspense>
                </RootContainer>
              </Scale>
            </Fonts>
          </Canvas>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
