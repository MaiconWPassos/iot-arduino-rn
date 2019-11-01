import React, { useState } from "react";
import { Modal, Content, Body, Label } from "./styles";

export default function ModalConfig(props) {
  const [modal, setModal] = useState(props.visible);
  return (
    <Modal animationType="slide" transparent={false} visible={modal}>
      <Content>
        <Body>
          <Label>IP servidor:</Label>

          <TouchableHighlight
            onPress={() => {
              setModal(false);
            }}
          >
            <Text>Salvar</Text>
          </TouchableHighlight>
        </Body>
      </Content>
    </Modal>
  );
}
