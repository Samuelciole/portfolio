import styled from "styled-components";
import { P } from "../../components/paragrafo/styles";

export const Descrição = styled(P)<{ $noWrap?: boolean }>`
  margin-top: 24px;
  margin-bottom: 40px;
  white-space: ${(props) => (props.$noWrap ? 'nowrap' : 'normal')};

  @media (max-width: 768px){
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0px;
  `;
