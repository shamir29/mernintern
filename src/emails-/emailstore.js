import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d0d0d0;
  outline: none;
  margin-bottom: 15px;
  transition: 0.3s;

  &:focus {
    border-color: #4b8df8;
    box-shadow: 0 0 8px rgba(75, 141, 248, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4b8df8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2666d3;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;