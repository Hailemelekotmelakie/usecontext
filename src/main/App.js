import { useState } from "react";
import { LoginContext, NameContext } from "../helper/context";
import Home from '../childs/Home'

function App() {
  const [login, setLogin] = useState(false)
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <NameContext.Provider value={"Hailemelekot"}>
        <Home />
      </NameContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
