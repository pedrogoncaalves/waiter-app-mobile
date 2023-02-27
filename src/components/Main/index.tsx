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
import { TableModal } from "../TableModal";
import { useState } from 'react'


export function Main() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');


    function handleSaveTable(table: string) {
        setSelectedTable(table)
    }

    function handleCancelOrder() {
        setSelectedTable('');
    }

    return(
        <>
        <Container>
            <Header
            selectedTable={selectedTable}
            onCancelOrder={handleCancelOrder}
            />

            <CategoriesContainer>
                <Categories/>

            </CategoriesContainer>

            <MenuContainer>
                <Menu/>

            </MenuContainer>
        </Container>
        <Footer>
            <FooterContainer>
                {!selectedTable && (
                    <Button onPress={() => setIsModalVisible(true)}>
                    Novo pedido
                </Button>
                )}
            </FooterContainer>

        </Footer>

        <TableModal visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleSaveTable}

        />
        </>
    )
}

