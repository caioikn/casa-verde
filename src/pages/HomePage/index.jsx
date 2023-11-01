import styled from 'styled-components';
import AssinaturaNewsLetter from '../../components/AssinaturaNewsLetter';
import Menu from '../../components/Menu';

const Main = styled.main`
    padding: 3rem 22.5rem 0 22.5rem;
`;

export default function HomePage() {
    return(
        <Main>
            <Menu />
            <AssinaturaNewsLetter />
        </Main>
    );
}
