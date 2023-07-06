import { Fonts, Scale } from "@coconut-xr/apfel-kruemel";
import { RootContainer } from "@coconut-xr/koestlich";
import { XWebPointers, noEvents } from "@coconut-xr/xinteraction/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonsPage from "./pages/Buttons";
import CheckboxesPage from "./pages/Checkboxes";
import InputFieldsPage from "./pages/InputFields";
import ListsPage from "./pages/Lists";
import ProgressIndicatorsPage from "./pages/ProgressIndicators";
import SegmentedControlsPage from "./pages/SegmentedControls";
import SlidersPage from "./pages/Sliders";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="tabs">
          <NavLink to="/buttons" className="tab">
            Buttons
          </NavLink>
          <NavLink to="/checkboxes" className="tab">
            Checkboxes
          </NavLink>
          <NavLink to="/input-fields" className="tab">
            InputFields
          </NavLink>
          <NavLink to="/lists" className="tab">
            Lists
          </NavLink>
          <NavLink to="/segmented-controls" className="tab">
            SegmentedControls
          </NavLink>
          <NavLink to="/sliders" className="tab">
            Sliders
          </NavLink>
          <NavLink to="/progress-indicators" className="tab">
            ProgressIndicators
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
                      <Route path="/buttons" element={<ButtonsPage />} />
                      <Route path="/checkboxes" element={<CheckboxesPage />} />
                      <Route
                        path="/input-fields"
                        element={<InputFieldsPage />}
                      />
                      <Route path="/lists" element={<ListsPage />} />
                      <Route
                        path="/segmented-controls"
                        element={<SegmentedControlsPage />}
                      />
                      <Route path="/sliders" element={<SlidersPage />} />
                      <Route
                        path="/progress-indicators"
                        element={<ProgressIndicatorsPage />}
                      />
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
