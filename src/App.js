import React from "react";
import "./App.css";
import { Table } from "./components/table";
import { Switch, Route } from "react-router-dom";
import { EditTour } from "./components/editTour";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/editar/tour/:id" component={EditTour} />
      </Switch>
    </div>
  );
}

export default App;
