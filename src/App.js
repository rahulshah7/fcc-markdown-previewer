import marked from "marked";
import React, { Component } from "react";
import TabbedView from "./components/TabbedView";
import SplitView from "./components/SplitView";
import CssBaseline from "@material-ui/core/CssBaseline";

import defaultMarkdown from "./assets/default.md";

marked.setOptions({
  breaks: true //add <br> on a single line break
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: "",
      previewText: "",
      isMobile: true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleScreenSize = this.handleScreenSize.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      editText: text,
      previewText: marked(text)
    });
  }

  handleScreenSize() {
    this.setState({ isMobile: window.innerWidth < 768 });
  }

  componentDidMount() {
    this.handleScreenSize();
    window.addEventListener("resize", this.handleScreenSize);
    fetch(defaultMarkdown)
      .then(response => response.text())
      .then(text => {
        this.handleTextChange(text);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenSize);
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          {this.state.isMobile ? (
            <TabbedView
              editText={this.state.editText}
              previewText={this.state.previewText}
              handleTextChange={this.handleTextChange}
            />
          ) : (
            <SplitView
              editText={this.state.editText}
              previewText={this.state.previewText}
              handleTextChange={this.handleTextChange}
            />
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
