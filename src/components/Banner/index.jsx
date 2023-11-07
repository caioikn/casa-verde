import Titulo from "../Titulo";
import ItemBanner from "./ItemBanner";
import { StyledSection } from "./styled";

export default function Banner() {
    return (
        <StyledSection>
            <img src="/images/planta.png" alt="Imagem de planta" />

            <div>
                <Titulo
                    texto='Como conseguir'
                    destaque='minha planta'
                    tamanho='2.625rem'
                />

                <div>
                    <ul>
                        <ItemBanner texto='Escolha suas plantas'/>
                        <ItemBanner texto='Faça seu pedido'/>
                        <ItemBanner texto='Aguarde na sua casa'/>
                    </ul>
                </div>
            </div>
        </StyledSection>
    );
}
