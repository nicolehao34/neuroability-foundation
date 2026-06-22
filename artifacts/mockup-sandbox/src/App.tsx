import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Landing } from "./components/mockups/neuroability/Landing";
import { Donate } from "./components/mockups/neuroability/Donate";
import { Research } from "./components/mockups/neuroability/Research";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/donate" component={Donate} />
        <Route path="/research" component={Research} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
