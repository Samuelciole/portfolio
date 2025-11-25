import { P } from "./styles";

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
  noWrap?: boolean;
}

const Paragrafo = ({ children, tipo = 'principal', fontSize, noWrap }: Props) => (
  <P fontSize={fontSize} tipo={tipo} $noWrap={noWrap}>
    {children}
  </P>
);

export default Paragrafo;
