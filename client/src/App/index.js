import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import List from "./List";
// import EditForm from "EditForm";
import Form from "./Form";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import "./styles.css";

function App(props) {
  return <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About}/>
      </Switch>
      <Header />
      <Form />
      <List />
    </div>;
}

export default App;
