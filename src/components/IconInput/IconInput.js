import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";

import Icon from "../Icon";

const vars = {
  small: {
    "--font-size": "0.875rem",
    "--border": "1px",
    "--height": "24px"
  },
  large: {
    "--font-size": "1.125rem",
    "--border": "2px",
    "--height": "36px"
  },
};

const Wrapper = styled.input`
  border: none;
  border-bottom: solid var(--border) ${COLORS.black};
  height: var(--height);
  padding-left: var(--height);
  width: var(--width);
  font-weight: 700;
  color: inherit;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 2px;
`;

const StyleWrapper = styled.span`
  position: relative;
`;

const Label = styled.label`
  font-size: var(--font-size);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Label style={vars[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyleWrapper>
        <IconWrapper
          aria-hidden="true"
          id={icon}
          size={size === "small" ? 16 : 24}
        />
        <Wrapper
          placeholder={placeholder}
          style={{ "--width": `${width}px` }}
        />
      </StyleWrapper>
    </Label>
  );
};

export default IconInput;
