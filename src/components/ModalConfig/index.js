import React, { useState } from "react";
import { AsyncStorage } from 'react-native';
import { Modal, Content, Body, Label, Button, Input } from "./styles";

export default function ModalConfig(props) {
  let modal = props.visible;
  const [ip, setIp] = useState('');

  async function getIp(){
    let ip = await AsyncStorage.get('@ipconfig', val);
    setIp(ip)
  }

  // getIp();

  async function handleIPChange(){
    await AsyncStorage.setItem('@ipconfig', ip);
    props.onClose();
  }
  return (
    <Modal animationType="slide" transparent={false} visible={modal}>
      <Content>
        <Body>
          <Label>IP servidor:</Label>
          <Input onChangeText={val => setIp(val)} value={ip}/>
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
            onPress={handleIPChange}
          >
            <Label>Salvar</Label>
          </Button>
        </Body>
      </Content>
    </Modal>
  );
}
