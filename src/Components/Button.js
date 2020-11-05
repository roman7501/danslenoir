import React from "react";
import styled from "styled-components";
import { fonts } from "../theme/helpers";

const Button = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default styled(Button)`
  background: #fff;
  border: transparent;
  border-radius: 50px;
  padding: 10px 50px;
  font-family: ${fonts.body};
  font-weight: 500;
  outline: none;
`;
