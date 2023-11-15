import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabledd] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handle Move:", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      addEventListener("pointermove", handleMove);
    }

    // limpieza de efectos anteriores (componentWillUnmount)(desmontaje)
    return () => {
      console.log("limpieza");
      removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <h3>Mouse Followr</h3>
      <div
        style={{
          width: 40,
          height: 40,
          backgroundColor: "pink",
          opacity: 0.8,
          pointerEvents: "none",
          borderRadius: "50%",
          position: "absolute",
          top: -20,
          left: -20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabledd(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguimineto
      </button>
    </>
  );
}

export default App;
