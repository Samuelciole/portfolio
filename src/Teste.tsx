import styled from "styled-components";

type BotaoProps = {
  principal?: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: white;
  font-size: ${(props) => props.fontSize || '16px'};
  `

  const BotaoPerigo = styled(Botao)`
    background-color: red;
  `;

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>Enviar</Botao>
      <Botao fontSize="14px">Cancelar</Botao>
      <BotaoPerigo principal>Deletar</BotaoPerigo>
    </>
  )
}

export default Teste;
