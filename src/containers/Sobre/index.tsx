import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/paragrafo";
import { EstliloDiv } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='principal'>
      Meu nome é Samuel Ciole, tenho 18 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Zona Sul. Apaixonado por tecnologia, estou sempre em busca de novos conhecimentos e desafios na área de desenvolvimento de software.
      Tenho experiência com diversas linguagens de programação, incluindo JavaScript, Python e Java. Além disso, estou familiarizado com frameworks como React e Node.js, o que me permite criar aplicações web dinâmicas e responsivas.
      Estou constantemente aprimorando minhas habilidades através de cursos online, projetos pessoais e participação em comunidades de desenvolvedores. Meu objetivo é contribuir para projetos inovadores e fazer a diferença no mundo da tecnologia.
    </Paragrafo>
    <EstliloDiv>
      <img src="https://github-readme-stats.vercel.app/api?username=Samuelciole&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"  alt="GitHub stats"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Samuelciole&layout=compact&langs_count=7&theme=dracula"  alt="GitHub stats"/>
    </EstliloDiv>
    </section>
)

export default Sobre
