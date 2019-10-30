import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, Label, Button, LabelNomes, BoxNomes } from "./styles";

export default function Index() {
  const [luz, setLuz] = useState(false);

  function handleLuz(params) {
    setLuz(!luz);
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
    </Container>
  );
}
