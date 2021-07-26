import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
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
    <>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        {/*<Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
        <Route path="/write">
          {user ? <Write/> : <Register/>}
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/> : <Register/>}
        </Route>*/}
      </Switch>
    </>
  );
}

export default App;
