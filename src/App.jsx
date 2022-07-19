import "./App.css";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../src/store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toaster />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
