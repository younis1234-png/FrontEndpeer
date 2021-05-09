import "./App.scss";
import Menu from "./components/UI/Menu/Menu";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Menu />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
