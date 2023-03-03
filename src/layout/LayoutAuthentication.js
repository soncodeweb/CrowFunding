import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="logo.png" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-[10px] px-[20px] py-[30px] lg:px-[60px] lg:py-[50px] mx-auto">
        <h2 className="text-center text-lg leading-[30px] mb-[5px] lg:mb-[10px] lg:text-xl text-text1 font-semibold font-primary">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  fallbackRender: ErrorComponent,
});
