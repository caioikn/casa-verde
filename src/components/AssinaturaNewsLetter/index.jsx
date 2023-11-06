import { useState } from "react";
import Titulo from "../Titulo";
import { NewsletterWrapper, StyledParagrafo, StyledFormulario } from "./styled";

export default function AssinaturaNewsLetter() {    
    const [email, setEmail] = useState('');
    const [botao, setBotao] = useState(true);

    function handleChange(event) {  
        setEmail(event.target.value);

        if (email.length + 1 > 10) {
            setBotao(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(email);

        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`);

        setEmail('');
        setBotao(true);
    }

    return (
        <NewsletterWrapper>
            <Titulo 
                texto={'Sua casa com as'}
                destaque={'melhores plantas'}
            />
            
            <StyledParagrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-la uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</StyledParagrafo>

            <StyledFormulario onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email}
                    placeholder="Insira seu e-mail" 
                    onChange={handleChange} 
                />

                <button 
                    type="submit"
                    disabled={botao}
                >   
                    Assinar newsletter
                </button>
            </StyledFormulario>
        </NewsletterWrapper>
    );
}
