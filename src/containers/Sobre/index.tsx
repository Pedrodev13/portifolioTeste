import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Github } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={10}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit maiores
      enim at sed, doloribus eum quibusdam sit, accusamus eaque vel fugiat
      laudantium fuga possimus reiciendis dicta explicabo ipsam sint aut.
    </Paragrafo>
    <Github>
      <img src="https://github-readme-stats.vercel.app/api?username=Pedrodev13&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pedrodev13&layout=compact&langs_count=7&theme=dracula" />
    </Github>
  </section>
)

export default Sobre
