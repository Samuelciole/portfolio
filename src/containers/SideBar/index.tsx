import Avatar from "../../components/avatar"
import Paragrafo from "../../components/paragrafo"
import Titulo from "../../components/Titulo/"
import { BotaoTema, Descrição } from "./styles"
import { SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Samuel Ciole</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Samuelciole
      </Paragrafo>
      <Descrição tipo="principal" $noWrap fontSize={12}>Desenvolvedor Front-End</Descrição>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
