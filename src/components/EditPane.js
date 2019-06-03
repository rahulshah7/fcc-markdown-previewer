import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function EditPane({ children }) {
  return (
    <Typography component="textarea" id="editor">
      {children}
    </Typography>
  );
}

// EditPane.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default EditPane;
