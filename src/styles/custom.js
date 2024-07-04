// Importar a dependência para criar CSS em componentes
import styled from "styled-components/native";

// Inicio personalização login
export const ContainerLogin = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #10101c;
`;

export const Logo = styled.View`
    padding-bottom: 20px;
`;

export const ImageLogo = styled.Image`
    width: 120px;
    height: 120px;
`;

export const InputForm = styled.TextInput`
    background-color: #f5f5f5;
    width: 90%;
    margin-bottom: 15px;
    color: #10101c;
    font-size: 18px;
    border-radius: 6px;
    padding: 10px;
`;

export const BtnSubmitForm = styled.Pressable`
    background-color: #1f51fe;
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const TxtSubmitForm = styled.Text`
    color: #f5f5f5;
    font-size: 18px;
`;

export const BtnPressedSubmitForm = (pressed) => ({
    backgroundColor: pressed ? '#0033cc' : '#1f51fe',
});

export const LinkLogin = styled.Text`
    color: #1f51fe;
    margin-top: 10px;
    font-size: 16px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
`;