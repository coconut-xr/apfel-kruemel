import { Fonts } from "@coconut-xr/apfel-kruemel";
import { inputCanvasProps } from "@coconut-xr/input";
import { RootContainer } from "@coconut-xr/koestlich";
import { Controllers, Hands, XRCanvas } from "@coconut-xr/natuerlich/defaults";
import {
  ImmersiveSessionOrigin,
  NonImmersiveCamera,
  SessionModeGuard,
  SessionSupportedGuard,
  useEnterXR,
} from "@coconut-xr/natuerlich/react";
import { Environment } from "@react-three/drei";
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

const sessionOptions: XRSessionInit = {
  requiredFeatures: ["local-floor", "hand-tracking"],
};

function App() {
  const enterAR = useEnterXR("immersive-ar", sessionOptions);
  const enterVR = useEnterXR("immersive-vr", sessionOptions);
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
          <div style={{ flexGrow: 1 }}></div>
          <SessionSupportedGuard mode="immersive-ar">
            <button className="enter-btn" onClick={enterAR}>AR</button>
          </SessionSupportedGuard>
          <SessionSupportedGuard mode="immersive-vr">
            <button className="enter-btn" onClick={enterVR}>VR</button>
          </SessionSupportedGuard>
        </div>
        <div className="content">
          <XRCanvas {...inputCanvasProps}>
            <SessionModeGuard deny="immersive-ar">
              <Suspense>
                <Environment files="apartment_4k.hdr" background blur={0.05} />
              </Suspense>
            </SessionModeGuard>
            <directionalLight position={[-2, 2, 2]} intensity={1.6} />
            <NonImmersiveCamera position={[0, 1.5, 0]} />
            <ImmersiveSessionOrigin>
              <Hands type="touch" />
              <Controllers />
            </ImmersiveSessionOrigin>
            <Fonts>
              <RootContainer
                position={[0, 1.5, -0.8]}
                pixelSize={0.001}
                anchorX="center"
                anchorY="center"
                precision={0.01}
              >
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
          </XRCanvas>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
