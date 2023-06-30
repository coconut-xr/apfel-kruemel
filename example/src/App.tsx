import { Fonts } from "@coconut-xr/apfel-kruemel";
import { RootContainer } from "@coconut-xr/koestlich";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { useState } from "react";
import "./App.css";
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
          <Environment files="/apartment_4k.hdr" background />
          <Fonts>
            <group scale={1 / 200}>
              <RootContainer
                anchorX="center"
                anchorY="center"
                width={1920}
                height={1080}
              >
                <Typography />
              </RootContainer>
            </group>
          </Fonts>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
