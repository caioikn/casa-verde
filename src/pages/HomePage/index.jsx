import styled from 'styled-components';
import AssinaturaNewsLetter from '../../components/AssinaturaNewsLetter';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';

const StyledMain = styled.main`
    background-image:  url('/images/hero-image.png'), url('/images/body-shape.svg');
    background-position: top right 10rem, top right;
    background-repeat: no-repeat, no-repeat;
`;

export default function HomePage() {
    return(
        <StyledMain>
            <Menu />
            <AssinaturaNewsLetter />            
            <Banner />
        </StyledMain>
    );
}
