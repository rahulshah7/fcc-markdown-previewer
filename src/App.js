import React, { Component } from "react";
import TabbedView from "./components/TabbedView";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: "THIS IS EDIT TEXT",
      previewText: "THIS IS PREVIEW TEXT"
    };
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <TabbedView
            editText={this.state.editText}
            previewText={this.state.previewText}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
