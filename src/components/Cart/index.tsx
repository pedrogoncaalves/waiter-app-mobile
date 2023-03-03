import { FlatList } from "react-native";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";
import { ProductContainer, Item, Actions, Image, QuantityContainer, ProductDetails } from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartProps {
    cartItems: CartItem[];
}

export function Cart({cartItems}: CartProps) {
    return (
        <FlatList
        data={cartItems}
        keyExtractor={ cartItem => cartItem.product._id }
        showsVerticalScrollIndicator={false}
        renderItem={({ item: cartItem}) => (
            <Item>
                <ProductContainer>
                    <Image
                    source={{
                        uri: `http://exp://192.168.100.3:19000/uploads/${cartItem.product.imagePath}`
                    }}
                    />
                    <QuantityContainer>
                        <Text size={14} color="#666">
                            {cartItem.quantity}x
                        </Text>
                    </QuantityContainer>
                    <ProductDetails>
                        <Text size={14} weight="600">{cartItem.product.name}</Text>
                        <Text size={14} color="#666" style={{marginTop: 4}}>{formatCurrency(cartItem.product.price)}</Text>
                    </ProductDetails>

                </ProductContainer>
                <Actions>

                </Actions>
            </Item>
        )}

        />
    )
}
