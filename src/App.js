import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import "./App.css"
//import { Context } from "./context/Context";

function App() {
  // going to fetch user from context instead of making psuedo-user
  //const {user} = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
