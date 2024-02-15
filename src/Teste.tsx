import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: fff;
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao fontSize="14px" principal={false}>
        Clique aqui
      </Botao>
      <BotaoPerigo principal>Não clique</BotaoPerigo>
    </>
  )
}

export default Teste
