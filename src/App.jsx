import "./App.css";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster />
      <Router />
    </div>
  );
}

export default App;
