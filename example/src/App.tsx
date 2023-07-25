import { Fonts } from "@coconut-xr/apfel-kruemel";
import { RootContainer } from "@coconut-xr/koestlich";
import { XWebPointers, noEvents } from "@coconut-xr/xinteraction/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonsPage from "./pages/Buttons.js";
import CheckboxesPage from "./pages/Checkboxes.js";
import InputFieldsPage from "./pages/InputFields.js";
import ListsPage from "./pages/Lists.js";
import ProgressIndicatorsPage from "./pages/ProgressIndicators.js";
import SegmentedControlsPage from "./pages/SegmentedControls.js";
import SlidersPage from "./pages/Sliders.js";
import TabBarsPage from "./pages/TabBars.js";
import { inputCanvasProps } from "@coconut-xr/input";

function App() {
  return (
    <HashRouter>
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
          <NavLink to="/tab-bars" className="tab">
            TabBars
          </NavLink>
        </div>
        <div className="content">
          <Canvas events={noEvents} {...inputCanvasProps}>
            <Environment files="apartment_4k.hdr" background />
            <directionalLight position={[-2, 2, 2]} intensity={0.8} />
            <OrbitControls enableRotate={false} />
            <XWebPointers />
            <Fonts>
              <RootContainer pixelSize={0.01} anchorX="center" anchorY="center" precision={0.01}>
                <Suspense>
                  <Routes>
                    <Route path="/" element={<Navigate to="/buttons" />} />
                    <Route path="/buttons" element={<ButtonsPage />} />
                    <Route path="/checkboxes" element={<CheckboxesPage />} />
                    <Route path="/input-fields" element={<InputFieldsPage />} />
                    <Route path="/lists" element={<ListsPage />} />
                    <Route path="/segmented-controls" element={<SegmentedControlsPage />} />
                    <Route path="/sliders" element={<SlidersPage />} />
                    <Route path="/progress-indicators" element={<ProgressIndicatorsPage />} />
                    <Route path="/tab-bars" element={<TabBarsPage />} />
                  </Routes>
                </Suspense>
              </RootContainer>
            </Fonts>
          </Canvas>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
