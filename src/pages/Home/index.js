// useEffect - Criar efeitos colaterais em componentes funcionais.
// useState - Adicionar estado ao componente.
import { useEffect, useState } from 'react';

// Incluir os componentes utilizado para estruturar o conteúdo
import { Text, View } from 'react-native';

// Incluir AsyncStorage para armazenar dados
import AsyncStorage from '@react-native-async-storage/async-storage';

// Incluir a função navegar entre as telas
import { useNavigation } from '@react-navigation/native';

// Criar e exportar a função com a tela dashboard
export default function Home() {

    // Navegar entre as telas
    const Navigation = useNavigation();

    // Armazenar as informações do usuário
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Função recuperar o valor que está em AsyncStorage
    const getToken = async () => {
        const valToken = await AsyncStorage.getItem('@token');
        const valName = await AsyncStorage.getItem('@name');
        const valEmail = await AsyncStorage.getItem('@email');

        setToken(valToken);
        setName(valName);
        setEmail(valEmail);
    }


    // Executar quando o usuário acessar a tela e chamar a função getToken
    useEffect(() => {
        getToken();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>Dashboard</Text>

            <Text></Text>

            <Text>Token: {token}</Text>
            <Text>Nome: {name}</Text>
            <Text>E-mail: {email}</Text>

            <Text></Text>

            <Text onPress={() => { Navigation.navigate('Login') }}>Login</Text>
        </View>
    )
}