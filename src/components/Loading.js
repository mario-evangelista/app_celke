// Incluir os componentes utilizado para estruturar o conteúdo
import { ActivityIndicator } from "react-native";

// Importar o arquivo com os componentes CSS
import { LoadingArea } from "../styles/custom";

// Componente de Loading
const Loading = ({ size = 'large', color = '#f5f5f5'}) => (
    <LoadingArea>
        <ActivityIndicator 
            size={size}
            color={color}
        />
    </LoadingArea>
);

// Exportar a função
export default Loading;