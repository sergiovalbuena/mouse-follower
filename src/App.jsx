import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    console.log("efecto", { enable });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handle Move:", { clientX, clientY });
    };

    addEventListener("mousemove", handleMove);
  }, [enable]);

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
          transform: "translate(0px, 0px)",
        }}
      ></div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Activar" : "Desactivar"} seguimineto
      </button>
    </>
  );
}

export default App;
