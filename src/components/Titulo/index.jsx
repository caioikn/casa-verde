import { TituloStyle } from "./styled";

export default function Titulo({ texto, destaque }) {
    return(
        <TituloStyle>
            <h1>{texto}</h1> <strong>{destaque}</strong>
        </TituloStyle>
    );
}
