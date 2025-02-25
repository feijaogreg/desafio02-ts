import { Center } from '@chakra-ui/react'
import './Header.css'

export const Header  = () => {
  return(
    <div className='header'>
      <Center padding={3}>
        <h1 id='header-text'>
          Header do Desafio
        </h1>
      </Center>
    </div>
  )
}
