import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
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
    width: "100vw"
  }
}));

function TabbedView({ editText, previewText, handleTextChange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Preview" />
          <Tab label="Edit" />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <PreviewPane>{previewText}</PreviewPane>
        <EditPane handleTextChange={handleTextChange}>{editText}</EditPane>
      </SwipeableViews>
    </div>
  );
}

TabbedView.propTypes = {
  previewText: PropTypes.string.isRequired,
  editText: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default TabbedView;
