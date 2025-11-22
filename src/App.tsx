import Sidebar from "./containers/SideBar"
import GlobalStyle, { Container } from "./styles"
import Sobre from "./containers/Sobre"
import Projetos from "./containers/Projetos"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
         <Sidebar />
         <main>
            <Sobre />
            <Projetos />
         </main>
      </Container>
    </>
  )
}

export default App

