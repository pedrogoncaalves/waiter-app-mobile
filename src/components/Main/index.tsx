import { Text } from "../Text";

import { Container,
CategoriesContainer,
MenuContainer,
Footer }
from "./styles";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";

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

        </Footer>
        </>
    )
}

