import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
    children: string
    onPress: () => void;
    disabled?: boolean;
}

export function Button({children, onPress, disabled}: ButtonProps) {
    return(
        <Container >
            <Text weight="600" color="#fff">{children} disabled={disabled}</Text>
        </Container>
    )
}