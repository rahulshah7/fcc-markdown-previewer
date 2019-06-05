import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: "100%",
    paddingTop: "4rem",
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
