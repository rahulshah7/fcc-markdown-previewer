import React from "react";
import TabbedView from "./components/TabbedView";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <TabbedView />
      </React.Fragment>
    </div>
  );
}

export default App;
