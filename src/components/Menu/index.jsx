import { StyledHeader } from "./styled";

export default function Menu() {
    return (
        <StyledHeader>                
            <img src="/images/logo.svg" alt="Logo Casa Verde" />

            <nav>
                <li>
                    <a href="/">Como fazer</a> /
                </li>
                
                <li>
                    <a href="/">Ofertas</a> /
                </li>
                
                <li>
                    <a href="/">Depoimentos</a> /
                </li>
                
                <li>
                    <a href="/">Vídeos</a> /
                </li>
                
                <li>
                    <a href="/">Meu carrinho</a>
                </li>
            </nav>
        </StyledHeader>
    );
}
