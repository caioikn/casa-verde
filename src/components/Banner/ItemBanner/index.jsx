import { StyledLi } from "./styled";

export default function ItemBanner({ texto }) {
    return (
        <StyledLi>            
            <img src="/images/ellipse.svg" alt="" />
            <p>{texto}</p>
        </StyledLi>
    );
}
