import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
  color: ${props => props.status ?  '#ffdd00' : '#ccc' };
  margin-top: 30px;
  font-size: 22px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #fff;
    padding: 8px 20px;
    width: 200;
    height: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100;
`;

export const BoxNomes = styled.View`
  padding: 10px 10px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;
export const LabelNomes = styled.Text`
  color: #ccc;
  font-size: 16px;
`;