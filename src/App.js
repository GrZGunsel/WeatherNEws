import "./App";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/main";
import Weather from "./Components/Weather/Weather";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </Router>
  );
}

export default App;
