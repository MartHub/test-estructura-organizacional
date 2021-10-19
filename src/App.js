import {useState} from 'react';
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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

  return (
    <Container>
      <Header>
        <ArrowBackIosIcon />
        <h2>ESTRUCTURA ORGANIZACIONAL</h2>
      </Header>
    </Container>
  );
}

export default App;
