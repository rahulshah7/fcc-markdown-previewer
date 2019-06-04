import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function EditPane({ children, updateText }) {
  function handleKeyUp(e) {
    updateText(e);
  }

  return (
    <Typography component="textarea" id="editor" onKeyUp={handleKeyUp}>
      {children}
    </Typography>
  );
}

// EditPane.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default EditPane;
