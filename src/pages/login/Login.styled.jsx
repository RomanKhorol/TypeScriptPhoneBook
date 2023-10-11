import styled from "@emotion/styled";
import "animate.css";
export const LoginTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #00008b;
  animation: animate__backInRight;
`;
export const LabelLogin = styled.label`
  font-size: 30px;
  margin-right: 5px;
  text-align: center;
`;
export const LabelInput = styled.input`
  height: 25px;
  margin-left: 40px;
  outline: none;
  border-color: #a9a9a9;
  border-radius: 4px;
  :focus {
    border-color: #4169e1;
    box-shadow: 1px 1px 2px 0 #4169e1;
  }
`;
export const LoginFormWrapar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Button = styled.button`
  margin-left: 50%;
  border: none;
  width: 120px;
  height: 40px;
  margin-top: 50px;
  background: #00bfff;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
