import styled from 'styled-components/native';

export const Modal = styled.Modal`
  
`;

export const Button = styled.TouchableOpacity`
    background: #fff;
    padding: 8px 20px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Content = styled.View`
    margin-top: 22px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export const Body = styled.View`
    background:#fff;
    padding: 8px 10px;
`;

export const Label = styled.Text`
    color: #2b2b2b;
`;

export const Input =styled.TextInput`
    font-size: 22;
    height: 40px;
    border-width: 1px;
    border-color: #ccc;
    width: 300;
    margin-top: 10;
    margin-bottom: 20;
    padding: 5px 15px;
`;