import React from "react";
import PropTypes from "prop-types";

interface IconProps {
  title: string;
}

function Icon(props: IconProps) {
  return (
    <button
      className="rounded-xl  flex items-center justify-center
     bg-white border shadow-md p-2 hover:scale-110 transition"
    >
      {props.title}
    </button>
  );
}

Icon.propTypes = { title: PropTypes.string.isRequired };

export default Icon;
