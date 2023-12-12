import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { type, children } = props;
  return <button type={type}>{children}</button>;
};

export default Button;
