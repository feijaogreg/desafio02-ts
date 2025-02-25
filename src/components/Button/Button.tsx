import { 
  Button
} from '@chakra-ui/react'
import './Button.css'

export const ButtonComponent  = ({ text, onClickEvent }: { text: string, onClickEvent?: () => void }) => {

  const onClickFunction = () => {
    alert('Login realizado com sucesso!')
  }

  return(
    <div className='Button'>
      <Button onClick={onClickEvent} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {text}
      </Button>
    </div>
  )
}
