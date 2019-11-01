import React, { useState } from "react";
import axios from 'axios';
import Icon from "react-native-vector-icons/AntDesign";
import ModalConfig from './components/ModalConfig';
import { Container, Label, Button, LabelNomes, BoxNomes, ButtonModal} from "./styles";


export default function Index() {
  const [luz, setLuz] = useState(false);
  const [modal, setModal] = useState(false);




  async function handleLuz(params) {
    let { status, data} = await axios.get('http://192.168.137.122:3333/' + (!luz ? 'acende' : 'apaga'));

    if(status === 200){
      setLuz(!luz);

    }


  }
  return (
    <Container>
      <Button
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
        onPress={handleLuz}
      >
        <Icon name="bulb1" size={70} color={luz ? "#ffdd00" : "#ccc"} />
      </Button>
      <Label status={luz}>{luz ? "Ligado" : "Desligado"}</Label>
      <BoxNomes>
        <LabelNomes>Maicon W. Passos 211838</LabelNomes>
        <LabelNomes>Douglas Batista 211368 </LabelNomes>
      </BoxNomes>

      <ButtonModal
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
        onPress={() => setModal(true)}>
        <Icon name="setting" size={20} color={luz ? "#ffdd00" : "#ccc"} />
      </ButtonModal>
       <ModalConfig visible={modal}/>
     
    </Container>
  );
}
