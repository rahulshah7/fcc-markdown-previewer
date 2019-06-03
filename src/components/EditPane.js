import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function EditPane({ children, dir }) {
  return (
    <Typography component="textarea" dir={dir} id="editor">
      {children}
    </Typography>
  );
}

// EditPane.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// };

export default EditPane;
