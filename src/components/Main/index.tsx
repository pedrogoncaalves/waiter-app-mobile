import { Text } from "../Text";

import { Container,
CategoriesContainer,
MenuContainer,
Footer }
from "./styles";

import { Header } from "../Header";


export function Main() {
    return(
        <>
        <Container>
            <Header/>
            <CategoriesContainer>

            </CategoriesContainer>

            <MenuContainer>

            </MenuContainer>
        </Container>
        <Footer>
            <FooterContainer></FooterContainer>
        </Footer>
        </>
    )
}

