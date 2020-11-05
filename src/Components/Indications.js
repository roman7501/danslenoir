import React from "react";
import styled from "styled-components";
import { fonts } from "../theme/helpers";

const Indications = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <p>installez-vous</p>
        <p>vous pouvez éteindre les lumières</p>
        <p>ça va bientôt commencer</p>
      </div>
    </div>
  );
};

export default styled(Indications)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.body};
  letter-spacing: ${fonts.space};
  line-height: 2.5;
  .container {
    transform: translate(-60px, 50px);
  }
  p {
    text-align: left;
  }
`;
