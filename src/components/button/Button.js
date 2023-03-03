import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  const {
    type = "button",
    children,
    className = "",
    isLoading = false,
    ...rest
  } = props;
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`flex justify-center items-center p-4 text-base font-semibold text-white rounded-lg min-h-[56px] ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
