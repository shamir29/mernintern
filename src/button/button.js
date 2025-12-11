import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4b8df8;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background-color: #2666d3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`;