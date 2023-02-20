import { Text } from "../Text";

import { Container,
CategoriesContainer,
MenuContainer,
Footer,
FooterContainer}
from "./styles";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Button } from "../Button";
export function Main() {
    return(
        <>
        <Container>
            <Header/>

            <CategoriesContainer>
                <Categories/>

            </CategoriesContainer>

            <MenuContainer>
                <Menu/>

            </MenuContainer>
        </Container>
        <Footer>
            <FooterContainer>
                <Button onPress={() => alert('Novo pedido realizado')}>
                    Novo pedido
                </Button>
            </FooterContainer>

        </Footer>
        </>
    )
}

