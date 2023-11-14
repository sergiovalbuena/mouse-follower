import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    console.log("efecto");
  }, []);

  return (
    <>
      <h3>Mouse Followr</h3>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Activar" : "Desactivar"} sguimiento
      </button>
    </>
  );
}

export default App;
