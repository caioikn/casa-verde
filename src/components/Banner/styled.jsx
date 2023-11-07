import styled from "styled-components";

export const StyledSection = styled.section`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    display: flex;
    margin: 12rem 30rem 0rem 30rem;
    width: 55%;    

    div {
       padding-left: 1.5rem;

       div {
           ul {
               display: flex;
               flex-direction: column;
               gap: 2rem;
               margin-top: 2rem;
           } 
       }
    }
`;
