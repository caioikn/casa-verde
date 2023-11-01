import Titulo from "../Titulo";
import { Formulario, NewsletterWrapper, Paragrafo } from "./styled";

export default function AssinaturaNewsLetter() {
    return (
        <NewsletterWrapper>
            <Titulo 
                texto={'Sua casa com as'}
                destaque={'melhores plantas'}
            />
            
            <Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-la uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>

            <Formulario>
                <input type="email" placeholder="Insira seu e-mail" required />
                <button>Assinar newsletter</button>
            </Formulario>
        </NewsletterWrapper>
    );
}
