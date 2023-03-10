import { Text } from "../Text";
import { TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";
import { products } from '../../mocks/products'
import { formatCurrency } from "../../utils/formatCurrency";
import { ProductContainer, ProductImage, ProductDetails, Separator, PlusButton} from './styles';
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from '../types/Product'

interface MenuProps {
    onAddToCart: (product: Product) => void;
}



export function Menu({ onAddToCart}: MenuProps) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);


    function handleOpenModal(product: Product) {
        setIsModalVisible(true)
        setSelectedProduct(product)
    }

    return(

        <>
        <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}


        />
        <FlatList
        data={products}
        style={{ marginTop: 32}}
        contentContainerStyle={{ paddingHorizontal: 24}}
        ItemSeparatorComponent={Separator}
        keyExtractor={product => product._id}
        renderItem={({ item: product}) => (
            <ProductContainer onPress={() => setIsModalVisible(true)}>
                <ProductImage
                source={{
                    uri: `http://exp://192.168.100.3:19000/uploads/${product.imagePath}`
                }}
                />

                <ProductDetails>
                    <Text weight="700">{product.name}</Text>
                    <Text size={14}color="#666">{product.description}</Text>
                    <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
                </ProductDetails>

                <PlusButton onPress={() => onAddToCart(product)}>
                    <PlusCircle/>
                </PlusButton>
            </ProductContainer>
        )}
        />
        </>

    );
}
