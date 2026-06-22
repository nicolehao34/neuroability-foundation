import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Landing } from "./components/mockups/neuroability/Landing";
import { Donate } from "./components/mockups/neuroability/Donate";
import { Research } from "./components/mockups/neuroability/Research";
import { Work } from "./components/mockups/neuroability/Work";
import { Guides } from "./components/mockups/neuroability/Guides";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/donate" component={Donate} />
        <Route path="/research" component={Research} />
        <Route path="/work" component={Work} />
        <Route path="/resources" component={Guides} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
