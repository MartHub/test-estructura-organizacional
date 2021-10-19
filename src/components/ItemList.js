import React from 'react';
import Select from './Select';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 40px;
  margin-left: 200px;
  padding: 15px 25px 35px 25px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 1px 1px 6px 1px rgba(194, 192, 212, 0.3);
`;

const ItemList = ({list, color, handler, index, toolText}) => {

    let del
    let add 
    let showItems 
    let showPerson 

    if(index>=5){
      del = false;
      add = false;
      showItems = false;
      showPerson = true;
    }else {
      del = true;
      add = true;
      showItems = true;
      showPerson = false;
    }
  const renderList = list.map((element, i) => {

    

    console.log(element)
    
    return(
    <Select 
      color={color}
      del={del}
      add={add}
      showItems={showItems}
      showPerson={showPerson}
      toolText={toolText}
      handler={handler}
      index={index}
      pos={i}
      key={element}
    >
      {element}
    </Select>)
  })

  return(
    <ListContainer>
      {renderList}
    </ListContainer>
  )
}

export default ItemList;