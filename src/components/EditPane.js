import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    paddingTop: "4rem",
    overflow: "auto",
    // Remove text area default styles
    outline: "none",
    resize: "none",
    border: "none"
  }
}));

function EditPane({ children, handleTextChange }) {
  const classes = useStyles();

  function handleChange(e) {
    handleTextChange(e.target.value);
  }

  return (
    <Typography
      component="textarea"
      className={classes.root}
      id="editor"
      onChange={handleChange}
      value={children || ""}
    />
  );
}

EditPane.propTypes = {
  children: PropTypes.node.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default EditPane;
