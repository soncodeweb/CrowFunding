import { useState } from "react";

export default function useToggle(value) {
  const [toggle, setToggle] = useState(value);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return {
    toggle,
    handleToggle,
  };
}
