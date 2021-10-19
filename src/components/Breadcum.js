import React from 'react';
import { Breadcrumbs } from '@mui/material';
import BreadText from './BreadText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from '@emotion/styled'

const CustomArrow = styled(ArrowForwardIosIcon)`
  color: #0000FF;
  font-size: medium;
  font-weight: bold;
`;

const CustomRightArrow = styled(ArrowRightIcon)`
  color: #0000FF;
`;

const BreadContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 5px;
   margin-right: 5px;
   color: ${(props) => props.color || '#707070'}
`;


const Breadcum = ({breadList, topic}) => {
  const listLenght = breadList.length;
  
  const renderBread = breadList.map((element, i) => {
    console.log(topic)
    let color = '#707070';
    if (i  === listLenght - 1) {
      color = '#0063af';
    }
    if(i === 0){
      return(
        <BreadContainer color={color}>
          <CustomRightArrow color='#0000FF'/>
          <BreadText 
            title={topic[i]}
            description={element.item}
          >
          </BreadText>
        </BreadContainer>
      )
    }else {
      return (
        <BreadContainer color={color}>
          <CustomArrow />
          <BreadText 
            title={topic[i]}
            description={element.item}
          >
          </BreadText>
        </BreadContainer>
      )
    }
  });

  return (
    <Breadcrumbs separator='' aria-label='breadcum'>
      {renderBread}
    </Breadcrumbs>
  )
}

export default Breadcum;