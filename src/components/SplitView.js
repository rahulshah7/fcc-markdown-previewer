import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import EditPane from "./EditPane";
import PreviewPane from "./PreviewPane";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    width: "100vw",
    display: "flex"
  }
}));

function SplitView({ editText, previewText, handleTextChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs textColor="primary" variant="fullWidth">
          <Tab disabled={true} label="Edit" />
          <Tab disabled={true} label="Preview" />
        </Tabs>
      </AppBar>
      <EditPane handleTextChange={handleTextChange}>{editText}</EditPane>
      <PreviewPane>{previewText}</PreviewPane>
    </div>
  );
}

SplitView.propTypes = {
  editText: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default SplitView;
