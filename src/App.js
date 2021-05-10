import "./App.scss";
import Nav from "./components/UI/Nav/Nav";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
