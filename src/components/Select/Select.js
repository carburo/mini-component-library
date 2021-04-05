import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const Wrapper = styled.select`
  font-size: 1rem;
  color: inherit;
  padding: 12px 52px 12px 16px;
  margin: 0 0 0 8px;
  border: none;
  border-radius: 8px;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
`;

const WrapperIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  color: currentColor;
  margin: auto;
  pointer-events: none;
`;

const ColorWrapper = styled.span`
  position: relative;
  color: ${COLORS.gray700};
  :hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <label>
      {label}
      <ColorWrapper>
        <Wrapper value={value} onChange={onChange}>
          {children}
        </Wrapper>
        <WrapperIcon
          aria-hidden="true"
          id="chevron-down"
          size={24}
          strokeWidth={2}
        />
      </ColorWrapper>
    </label>
  );
};

export default Select;
