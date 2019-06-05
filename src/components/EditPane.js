import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: "100%",
    paddingTop: "4rem"
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
