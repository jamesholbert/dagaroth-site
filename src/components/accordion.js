import React, { useState, Fragment } from "react";

import styled from "styled-components";

const AccordionContents = styled.div`
    overflow: hidden;
    transition-property: opacity, transform;
    transition: max-height 400ms ease-in-out;
    ${p => !p.open && "max-height: 0;"}
    ${p => p.open && "max-height: 100%;"}
    ${p => p.open && "transition: max-height 1000ms ease-in-out;"}
`;

const FadeIn = styled.div`
  transition: opacity 400ms ease-in-out;
  opacity: 0;
  ${p => p.open && "transition: opacity 500ms ease-in-out;"}
  ${p => p.open && "opacity: 1;"}
`;

const Accordion = ({ contents, children }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
  	setTimeout(() => setOpen(!open), 50)
  }

  return (
    <Fragment>
      <span onClick={toggleAccordion}>{children}</span>
      <AccordionContents open={open}>
        <FadeIn open={open}>
          {contents}
        </FadeIn>
      </AccordionContents>
    </Fragment>
  );
};

export default Accordion;