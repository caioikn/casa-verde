import { StyledTitulo } from "./styled";

export default function Titulo({ texto, destaque }) {
    return(
        <StyledTitulo>
            <h1>{texto}</h1> <strong>{destaque}</strong>
        </StyledTitulo>
    );
}
