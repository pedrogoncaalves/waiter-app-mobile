import { Text } from "../Text";
import axios from "axios";
import { useEffect } from 'react'
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
import { Product } from "../types/Product";
import { ICategory } from "../types/Category";
export function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItem, setCartItem] = useState<CartItem[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
       Promise.all([
        axios.get('http://192.168.100.3:19000/categories'),
        axios.get('http://192.168.100.3:19000/products'),
       ]).then(([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);
       })

    }, []);


    function handleSaveTable(table: string) {
        setSelectedTable(table)
    }

    function handleResetOrder() {
        setSelectedTable('');
        setCartItem([]);
    }

    function handleAddToCart(product: Product) {
        if(!selectedTable) {
            setIsModalVisible(true)
        }
        setCartItem((prevState) => {
            const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            if(itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCartItems = [...prevState];
            const item = newCartItems[itemIndex];

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
            };
            return newCartItems;
        })};

    function handleDecrementCartItem(product: Product) {
        setCartItem((prevState) => {
            const itemIndex = prevState.findIndex
            (cartItem => cartItem.product._id === product._id);

            const item = prevState[itemIndex];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);

                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
            };

            return newCartItems;
        })

    }



    return(
        <>
        <Container>
            <Header
            selectedTable={selectedTable}
            onCancelOrder={handleResetOrder}
            />

            <CategoriesContainer>
                <Categories/>

            </CategoriesContainer>

            <MenuContainer>
                <Menu onAddToCart={handleAddToCart}/>

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
                    <Cart
                    cartItems={cartItem}
                    onAdd={handleAddToCart}
                    onDecrement={handleDecrementCartItem}
                    onConfirmOrder={handleResetOrder}/>
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

