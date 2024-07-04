// Incluir os componentes utilizado para estruturar o conteúdo
import { Text, View } from 'react-native';

// Incluir a função navegar entre as telas
import { useNavigation } from '@react-navigation/native';

// Criar e exportar a função com a tela recuperar senha 
export default function RecoverPassword() {

    // Navegar entre as telas
    const Navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>Recover Password</Text>

            <Text onPress={() => { Navigation.navigate('Login') }}>Login</Text>
        </View>
    )
}