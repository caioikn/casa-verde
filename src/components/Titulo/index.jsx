import styled from "styled-components";
import { StyledTitulo } from "./styled";

const StyledStrong = styled.strong.attrs(props => ({
    $size: props.$size || '5.125rem'
}))`
    font-family: 'Elsie Swash Caps', serif;
    font-size: ${props => props.$size};
    font-weight: 900;
    opacity: 1;
`;

export default function Titulo({ texto, destaque, tamanho }) {
    return(
        <StyledTitulo>
            <h1>{texto}</h1> <StyledStrong $size={tamanho}>{destaque}</StyledStrong>
        </StyledTitulo>
    );
}
