import {useEffect, useState} from 'react';
import Breadcum from './components/Breadcum';
import styled from 'styled-components'
import Select from './components/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemList from './components/ItemList';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Header = styled.div`
  display: flex; 
  align-items: center;
`;

const ContentContainer = styled.div`
  margin: 80px auto 0 auto;
  width: 70%;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

function App() {

  const [list1, setList1] = useState(['Angeles S.A. de C.V.']);
  const [list2, setList2] = useState(['Pedregal 2', 'Acoxpa', 'Interlomas', 'Roma']);
  const [list3, setList3 ]= useState(['Departamento de emergencias']);
  const [list4, setList4] = useState(['Emergencia Adulto', 'Emergencia infantil']);
  const [list5, setList5] = useState(['Sala de Choque', 'Sala de Observación', 'Sala de Emergencia']);
  const [list6, setList6] = useState(['Consulta General', 'Consulta de cardiologia', 'consulta de cardiologia'])

  
  const [lists, setLists] = useState([list1, list2, list3, list4, list5, list6]);
  const topics = ['Organización', 'Institución', 'Departamento', 'Otro', 'Servicio'];
  const [showList, setShowList] = useState(false);
  const [index, setIndex] = useState(0)
  const [valueHistory, setValueHistory] = useState([]);
  const [currentColor, setCurrentColor] = useState('#575757');
  const [currentText, setCurrentText] = useState('Angeles S.A. de C.V.')

  
  const colors = ['#575757', '#0063ae', '#4b9598', '#4fd5c7', '#4fb9d5', '#a2d9e8']


  const handleSelect = (e, color) => {
    const value = e.target.parentElement.parentElement.parentElement.firstChild;
    e.stopPropagation();
    setShowList(true);
    setIndex(index + 1);
    setValueHistory([...valueHistory, {item: value.data, color: color}])
  }

  useEffect(() => {
    if(valueHistory.length > 0){
      const index = valueHistory.length - 1;
      setCurrentColor(valueHistory[index].color);
      setCurrentText(valueHistory[index].item);
    }
  }, [valueHistory])

  return (
    <Container>
      <Header>
        <ArrowBackIosIcon />
        <h2>ESTRUCTURA ORGANIZACIONAL</h2>
      </Header>
      
      <Breadcum breadList={valueHistory} topic={topics}/>
      <ContentContainer>
        <Select
          color={currentColor}
          del={false}
          add={true}
          showItems={true}
          toolText={index - 1 >= 0 ? topics[index - 1] : 'Organización'}
          handler={handleSelect}
          index={index - 1 >= 0 ? index - 1 : 0}
          animationFlag = {showList}
        >
          {currentText}
        </Select>
        {showList ? 
          <ItemList 
            list={lists[index]}
            color={colors[index]}
            handler={handleSelect}
            index={index}
            toolText={topics[index]}
          />
          : null
        }
      </ContentContainer>
    </Container>
  );
}

export default App;
