import React from 'react';
import styled, { keyframes, css } from 'styled-components';


const TooltipAnimation = keyframes`
  0%{opacity: 0}
  100%{opacity: 1}
`;

const Tooltip = styled.div`
  background-color: ${(props) => props.bg};
  font-size: 12px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  padding: 5px 10px;
  color: #FFF;
  border-radius: 5px;
  ${(props) => props.animation && 
  css`
    animation-name: ${TooltipAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: forwards;
  `}
  &:after{
    content: '';
    position: absolute;
    top: 100%;
    left: 75%;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.bg} transparent transparent transparent;
  }
`;

const ToolTip = ({color, text, top, left}) => {
  return (
    <Tooltip bg={color} animation top={top} left={left}>
      {text}
    </Tooltip>
  )
}

export default ToolTip;