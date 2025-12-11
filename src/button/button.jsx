import React from "react";
import { StyledButton } from "./button-style";

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;