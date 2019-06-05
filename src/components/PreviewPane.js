import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "1rem",
    paddingTop: "4rem",
    wordBreak: "break-word",

    // Style Markdown rendered as HTML
    "& h1": {
      color: "green"
    }
  }
}));

function PreviewPane({ children }) {
  const classes = useStyles();
  return (
    <Typography
      component="div"
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: children }}
      id="preview"
    />
  );
}

PreviewPane.propTypes = {
  children: PropTypes.node.isRequired
};

export default PreviewPane;
