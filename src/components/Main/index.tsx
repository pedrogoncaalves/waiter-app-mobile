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
import { Cart } from "../Cart";
import { CartItem } from "../types/CartItem";
import { products } from "../../mocks/products";

export function Main() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItem, setCartItem] = useState<CartItem[]>([
        {
            quantity: 1,
            product: products[0]
        },
        {
            quantity: 2,
            product: products[1]
        }
    ]);


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

                {selectedTable && (
                    <Cart cartItems={cartItem}/>
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

