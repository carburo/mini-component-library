import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const OverflowWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const styles = {
  small: {
    height: "8px",
    borderRadius: "4px",
    padding: "0",
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
    padding: "0",
  },
  large: {
    height: "24px",
    borderRadius: "8px",
    padding: "4px",
  },
};

const ProgressBar = ({ value, size, className }) => {
  let progress = clamp(value, 0, 100);
  const style = styles[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
      style={{
        "--border-radius": style.borderRadius,
        "--padding": style.padding,
      }}
      className={className}
    >
      <VisuallyHidden>{progress}</VisuallyHidden>
      <OverflowWrapper>
        <InnerBar
          style={{ "--width": `${progress}%`, "--height": style.height }}
        />
      </OverflowWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
