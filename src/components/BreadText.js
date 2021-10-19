import React from 'react';
import styled from '@emotion/styled'


const Bread = styled.div`
  text-align: left;
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px; 
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  
`;

const BreadText = ({title, description}) => {
  return (
    <Bread>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Bread>
  )
}

export default BreadText;