import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

function PreviewPane({ children }) {
  return (
    <Typography
      component="div"
      id="preview"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

PreviewPane.propTypes = {
  children: PropTypes.node.isRequired
};

export default PreviewPane;
