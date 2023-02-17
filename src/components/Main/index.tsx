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
                <Categories/>

            </CategoriesContainer>

            <MenuContainer>
                <Menu/>

            </MenuContainer>
        </Container>
        <Footer>
            <FooterContainer></FooterContainer>
        </Footer>
        </>
    )
}

