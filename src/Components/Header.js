import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import { fonts, pxToRem } from "../theme/helpers";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <section>
        <div className="titre">
          <h1>La langue des oiseaux</h1>
          <h3>dans le noir</h3>
        </div>
        <p className="sous-titre">
          spectacle à inventer tous les soirs à 20h30
        </p>
      </section>
      <Arrow className="icon" />
    </div>
  );
};

export default styled(Header)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  section {
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .titre {
    font-family: freight-big-pro, serif;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    position: relative;
  }
  .titre h3 {
    position: absolute;
    opacity: 0.6;
    right: 0;
  }
  .sous-titre {
    font-family: ${fonts.body};

    letter-spacing: ${fonts.space};
    margin-top: 6rem;
  }
  .icon {
    position: absolute;
    bottom: 0;
    margin-bottom: 100px;
  }

  @media (max-width: 600px) {
    section {
      margin-right: 20px;
      margin-left: 20px;
    }
    .titre {
      font-size: ${pxToRem(12)};
      letter-spacing: 0.15rem;
    }
    .titre h3 {
      font-size: ${pxToRem(22)};
    }
    .sous-titre {
      margin-right: 20px;
      margin-left: 20px;
      font-size: ${pxToRem(12)};
      text-align: center;
    }
    .icon {
      margin-bottom: 120px;
    }
  }
`;
