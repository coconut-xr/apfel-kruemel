import { Fonts } from "@coconut-xr/apfel-kruemel";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import Skybox from "./components/Skybox";
import Typography from "./pages/Typography";

type Tab = "typography" | "colors";

function App() {
  const [currentTab, setCurrentTab] = useState<Tab>("typography");

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={clsx("tab", currentTab === "typography" && "active")}
          onClick={() => setCurrentTab("typography")}
        >
          Typography
        </button>
        <button
          className={clsx("tab", currentTab === "colors" && "active")}
          onClick={() => setCurrentTab("colors")}
        >
          Colors
        </button>
      </div>
      <div className="content">
        <Canvas>
          <Skybox />
          <Screen>
            <Fonts>
              <Typography />
            </Fonts>
          </Screen>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
