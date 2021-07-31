import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import IconTest from "./pages/IconTest";
import WriteTest from "./pages/writeTest/WriteTest";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Projects from "./pages/projects/Projects"
import Jdrworld from "./pages/project/Jdrworld";
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
        <Route path="/iconTest">
          <IconTest/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/jdrworld">
          <Jdrworld/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        {/*<Route path="/about">
          <About/>
        </Route>*/}
        <Route path="/post/:postId">
          <Single/>
        </Route>
        {/*<Route path="/user/:username">
          {user ? <Settings/> : <Login/>}
        </Route>
        <Route path="/write">
          {user ? <Write/> : <Login/>}
        </Route>*/}
        <Route path="/writeTest">
          <WriteTest/>
        </Route>
        {/*<Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/changeUsername">
          {user ? <ChangeUsername/> : <Login/>}
        </Route>
        <Route path="/resetEmail">
          {user ? <ResetEmail/> : <Login/>}
        </Route>
        <Route path="/resetPassword">
          {user ? <ResetPassword/> : <Login/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/> : <Login/>}
        </Route>*/}
      </Switch>
    </>
  );
}

export default App;
