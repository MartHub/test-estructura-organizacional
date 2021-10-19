import React, {useState} from 'react';
import ToolTip from './ToolTip';
import styled, {css, keyframes} from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PersonIcon from '@mui/icons-material/Person';


const CustomPerson = styled(PersonIcon)`
  color: #61c0d9;
`;

const CustomAdd = styled(AddIcon)`
  position: relative;
  color: #FFF;
`;

const CustomLine = styled(HorizontalRuleIcon)`
  position: relative;
  color: #FFF;
`;

const Twist = keyframes`
  0%{transform: rotate(0deg)}
  100%{transform: rotate(90deg)}
`;

const CustomKArrow = styled(KeyboardArrowRightIcon) `
  color: #92a4b8;
  transform: rotate(0);
  transition: transform 0.5s;
  ${(props) => props.animation && 
    css`
      animation-name: ${Twist};
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    `}
`


const SelectInput = styled.div`
  position: relative;
  border: 4px solid ${(props) => props.borderColor};
  height: 40px;
  border-radius: 10px;
  background-color: white;
  outline: none;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FilledRounded = styled.div`
  position: relative;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  box-shadow: 2px 2px 4px 3px rgba(194, 192, 212, 0.7);
`;

const Select = ({
    children,
    color,
    del,
    add,
    showItems,
    showPerson,
    toolText,
    handler,
    animationFlag,
    index
  }) => {
  const [showTT, setShowTT] = useState(false);
  const [showTTDel, setShowTTDel] = useState(false);
  const [showTTAdd, setShowTTAdd] = useState(false);

  const handleToolTip = (variable, setVariable) => {
    setVariable(!variable)
  }

  console.log(index)

  return(
    <SelectInput
      borderColor={color}
      onMouseEnter={() => handleToolTip(showTT, setShowTT)}
      onMouseLeave={() => handleToolTip(showTT, setShowTT)} 
      
    >
      {children}
      <Icons>
        {del ? 
          <FilledRounded bg='#c41a1a'>
            <CustomLine 
              onMouseEnter={() => handleToolTip(showTTDel, setShowTTDel)}
              onMouseLeave={() => handleToolTip(showTTDel, setShowTTDel)}
            />
            {showTTDel ? 
              <ToolTip 
                color='#c41a1a'
                text={'Eliminar'}
                animation={showTTDel}
                top='-30px'
                left='-45px'
              /> 
              : null}
          </FilledRounded>
          : null
        }
        {add ? 
          <FilledRounded bg='#0692a2'>
            <CustomAdd 
              onMouseEnter={() => handleToolTip(showTTAdd, setShowTTAdd)}
              onMouseLeave={() => handleToolTip(showTTAdd, setShowTTAdd)}
            />
            {showTTAdd ? 
              <ToolTip 
                color='#0692a2'
                text={'Agregar'}
                animation={showTTDel}
                top='-30px'
                left='-45px'
              /> 
              : null}
          </FilledRounded>
          : null
        }
        {showItems ? 
          <FilledRounded onClick={(e) => handler(e, color)}>
            <CustomKArrow animation={animationFlag}/>
          </FilledRounded>
          : null
        }

        {showPerson ? 
          <FilledRounded >
            <CustomPerson/>
          </FilledRounded>
        : null
        }
        
      </Icons>
      {showTT && index < 5?
        <ToolTip
          color={color}
          text={toolText}
          animation={showTT}
          top='-33px'
          left='10px'
        /> 
        : null
      }
      
    </SelectInput>
  )
}

export default Select;