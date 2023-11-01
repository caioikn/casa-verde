import styled from "styled-components";

export const NewsletterWrapper = styled.section`
    color: #202020;
    margin-top: 9.5rem;
    width: 50%;
`;

export const Paragrafo = styled.p`
    line-height: 1.625rem;
    margin: 1.5rem 0 2.5rem 0;
    opacity: 0.5;
`;

export const Formulario = styled.form`
    input {        
        background-image: url('/images/mail.svg');
        background-position: 16px center;
        background-repeat: no-repeat;
        border: 2px solid #FFFFFF;
        box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
        font-family: 'Montserrat', sans-serif;
        padding: 1.75rem 12.75rem 1.75rem 3.5rem;

        &:focus {
            outline: none;
            border: 2px solid #FFCB47;;
        }
    }

    button {
        background-color: #FFCB47;
        border: 2px solid #FFCB47;
        box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.30);
        color: #FFFFFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        padding: 1.75rem 1.5rem;
    }
`;
