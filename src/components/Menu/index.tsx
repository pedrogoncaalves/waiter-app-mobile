import { Text } from "../Text";
import { View } from "react-native";
import { FlatList } from "react-native";
import { products } from '../../mocks/products'
import { formatCurrency } from "../../utils/formatCurrency";
import { Product, ProductImage, ProductDetails} from './styles';

export function Menu() {
    return(
        <FlatList
        data={products}
        style={{ marginTop: 32}}
        contentContainerStyle={{ paddingHorizontal: 24}}
        keyExtractor={product => product._id}
        renderItem={({ item: product}) => (
            <Product>
                <ProductImage
                source={{
                    uri: `http://exp://192.168.100.3:19000/uploads/${product.imagePath}`
                }}
                />

                <ProductDetails>
                    <Text weight="600">{product.name}</Text>
                    <Text size={14}color="#666">{product.description}</Text>
                    <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
                </ProductDetails>
            </Product>
        )}
        />

    );
}
