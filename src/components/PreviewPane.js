import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function PreviewPane({ children, dir }) {
  return (
    <Typography component="div" dir={dir} id="preview">
      {children}
    </Typography>
  );
}

// PreviewPane.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// };

export default PreviewPane;
