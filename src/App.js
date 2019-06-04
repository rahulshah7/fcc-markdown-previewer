import marked from "marked";
import React, { Component } from "react";
import TabbedView from "./components/TabbedView";
import CssBaseline from "@material-ui/core/CssBaseline";

import defaultMarkdown from "./assets/default.md";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: "",
      previewText: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      editText: text,
      previewText: marked(text)
    });
  }

  componentDidMount() {
    fetch(defaultMarkdown)
      .then(response => response.text())
      .then(text => {
        this.handleTextChange(text);
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
            handleTextChange={this.handleTextChange}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
