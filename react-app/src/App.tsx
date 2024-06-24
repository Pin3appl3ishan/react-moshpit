import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    },
  });

  const handlClick = () => {
    setGame({...game, player: {...game.player, name: 'Gob'}})
  }
  
  return (
<button onClick={handlClick}>Click Me</button>
  );
}

export default App;
