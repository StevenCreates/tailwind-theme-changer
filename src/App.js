import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
