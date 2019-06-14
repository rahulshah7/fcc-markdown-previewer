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
    wordBreak: "break-word",
    overflow: "auto",

    // Style Markdown rendered as HTML in preview pane
    "& a": { color: theme.palette.secondary.light },
    "& a:visited": { color: theme.palette.secondary.dark },
    "& blockquote": {
      background: theme.palette.grey[100],
      color: theme.palette.primary.main,
      borderLeft: "0.25rem solid",
      paddingLeft: "0.5rem",
      margin: "1rem"
    },
    "& pre": {
      overflowX: "auto"
    },
    "& pre, code": {
      background: theme.palette.grey[200],
      fontWeight: "bold"
    },
    "& table": {
      borderCollapse: "collapse"
    },
    "& th, td": {
      padding: "0.5rem",
      border: "1px solid black"
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
