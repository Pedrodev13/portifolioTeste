import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragrafo = (props: Props) => (
  <TituloEstilo>{props.children}</TituloEstilo>
)

export default Paragrafo
