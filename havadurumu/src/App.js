import { useState } from "react";
import "./App.css";
import DataStore from "./components/DataStore";
import Main from "./components/Main/Main";

function App() {
  const [city, setCity] = useState(null);
  const [cityInfos, setCityInfos] = useState([]);

  return (
    <div className="App">
      <DataStore.Provider value={{ city, setCity, cityInfos, setCityInfos }}>
        <Main />
      </DataStore.Provider>
    </div>
  );
}

export default App;
