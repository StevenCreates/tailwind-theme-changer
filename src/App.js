import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/Home";
import ThemeContext from "./utilities/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
