import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error,
    children,
    showPassword,
    placeholder,
    ...rest
  } = props;
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={`${showPassword ? "text" : type}`}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-lg   placeholder:text-text4 ${
          error?.length > 0
            ? "border-error text-error"
            : "border-strock text-text1"
        }
        
        ${children ? "pr-16" : ""}`}
        placeholder={`${error?.length > 0 ? "" : placeholder}`}
        {...field}
        {...rest}
      />
      {error?.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none top-2/4 -translate-y-2/4 left-6 text-error error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-6">
          {children}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  toggleEye: PropTypes.bool,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
