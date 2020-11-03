import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import grotte from "../images/grotte-low.jpg";

const Spectacle = ({ className }) => {
  return (
    <div className={className}>
      <div className="start">
        <button>commencer</button>
        <p>durée: 30min</p>
      </div>
    </div>
  );
};

export default styled(Spectacle)`
  min-height: 130vh;
  background-image: url(${grotte});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-family: ${fonts.body};

  letter-spacing: ${fonts.space};
  line-height: ${fonts.line};
  position: relative;
  .start {
    text-align: center;
  }
  button {
    margin-top: 70px;
    background: #fff;
    border: transparent;
    border-radius: 50px;
    padding: 10px 50px;
    font-family: ${fonts.body};
    font-weight: 500;
  }
  .start p {
    font-size: ${pxToRem(14)};
  }

  @media (max-width: 900px) {
    background: none;
    min-height: 30vh;
  }
`;
