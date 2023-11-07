import styled from "styled-components";

export const StyledHeader = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 3rem 22.5rem 0 22.5rem;

    nav {
        display: flex;
        gap: 0.8rem;

        li {
            list-style: none;

            a {                
                color: #202020;
                padding-right: 0.8rem;
                text-decoration: none;
            }
        }
    }
`;