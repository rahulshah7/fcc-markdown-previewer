import marked from "marked";
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
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      editText: e.target.value,
      previewText: marked(e.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <TabbedView
            editText={this.state.editText}
            previewText={this.state.previewText}
            updateText={this.updateText}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
