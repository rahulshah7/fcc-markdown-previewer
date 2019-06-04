import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function EditPane({ children, handleTextChange }) {
  function handleChange(e) {
    handleTextChange(e.target.value);
  }

  return (
    <Typography
      value={children || ""}
      component="textarea"
      id="editor"
      onChange={handleChange}
    />
  );
}

// EditPane.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default EditPane;
