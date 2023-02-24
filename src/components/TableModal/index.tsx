import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";
import { Overlay, ModalBody, Header, Form, Input } from "./styles";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { useState } from "react";

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
}

export function TableModal({ visible, onClose }: TableModalProps) {

    const [table, setTable] = useState('')


    return(
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <Header>
                        <Text weight="600">Informe a mesa</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color="#666"/>
                        </TouchableOpacity>

                    </Header>

                    <Form>
                        <Input
                        placeholder="Número da mesa"
                        placeholderTextColor={"#666"}
                        keyboardType="number-pad"
                        onChangeText={setTable}

                        />
                        <Button onPress={() => alert('Salvou!')} disabled={table.length === 0}>
                            Salvar
                            </Button>

                    </Form>

                </ModalBody>

            </Overlay>

        </Modal>
    )
}
