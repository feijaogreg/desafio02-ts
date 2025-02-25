import { Box, Center, Input } from "@chakra-ui/react"
import { ButtonComponent } from "../Button/Button"
import './Card.css'

interface ICard {
  title?: string
}

export const CardComponent = ({ title }: ICard) => {
  const onClickFunction = () => {
    alert('Login realizado com sucesso!')
  }
  return(
    <div>
      <Box className="body" >
          <Center mb={4}>
            <h1>{title}</h1>
          </Center>
          <Input placeholder="email" mb={4}/>
          <Input placeholder="password" mb={4}/>
          <Center>
            <ButtonComponent text='Login' onClickEvent={onClickFunction} />
          </Center>
        </Box>
    </div>
  )
}