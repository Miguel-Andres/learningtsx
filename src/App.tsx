import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";

import { Usuario } from "./components/Usuario";


function App() {
  return (
    <>
    <h1>Hola mundo-- Firt app whit TS !!!</h1>

    <Counter />
    <Usuario />

    <h2>UseEffect - useRef</h2>
    <hr/>
    
    <TimerPadre/>

    <h2>UseReducer</h2>
    <hr/>
      <ContadorRed/>
    </>
  );
}

export default App;
