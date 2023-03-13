import { Modal } from "react-native";


interface OrderConfirmedModalProps {
    visible: boolean;
}

export function OrderConfirmedModal ({ visible }: OrderConfirmedModalProps) {
    return(
        <Modal
        visible={visible}
        animationType="fade"
        >

        </Modal>
    )
}
