import { 
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { ButtonComponent } from './components/Button/Button';
import { CardComponent } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <CardComponent title='Login' />
      </Box>
    </ChakraProvider>
  );
}

export default App;
