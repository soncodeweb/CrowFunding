import React from "react";

const Checkbox = (props) => {
  const { checked = true, onClick = () => {}, name, children } = props;
  return (
    <div className="flex items-start select-none gap-x-5">
      <label
        htmlFor=""
        className={`inline-flex items-center justify-center w-5 h-5 border rounded cursor-pointer text-white ${
          checked ? "bg-primary border-primary" : "border-strock"
        }`}
        onClick={onClick}
      >
        <input type="checkbox" className="hidden" name={name} />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </label>
      {children && (
        <label
          className="font-medium cursor-pointer text-text3"
          onClick={onClick}
        >
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
