import Keyboard from "../Keyboard/Keyboard";
import "./App.css";
import getIsMobile from "../../utils/getIsMobile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
// state для флага о мобильном устройстве
  const [isMobile, setIsMobale] = useState(false);

// функция запроса на сервер для получения headers
  const typeDevice = async () => {

    const {data} = await axios.get("http://localhost:7777/headers");

    setIsMobale(getIsMobile(data));
  }

  useEffect(() => {
    typeDevice()
  }, []);

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Keyboard isMobile={isMobile} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
