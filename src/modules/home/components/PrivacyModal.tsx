import React, { useEffect, useState } from "react"
import { Modal, View, Text, ScrollView } from "react-native"
import { Checkbox } from "react-native-paper"

import AppButton from "../../../utils/components/AppButton"
import LocalStorage from "../../../storage/LocalStorage"
import { PrivacyModalStyles } from "../styles/PrivacyModalStyles"
import { ModalDetailPrivacyStrings, ModalPrivacyStrings } from "../strings/ModalPrivacyStrings"
import { IPrivacyModal } from "../interfaces/ModalPrivacyInterface"

export const PrivacyModal = ({ showModal, setShowModal }: IPrivacyModal) => {

    const {
        modalButton,
        boldText,
        justifyText,
        detailPrivacyContainer,
        checkBoxArea,
        checkBoxMessage,
        modalBackgroundContainer,
        modalContainer } = PrivacyModalStyles

    const modalDetailPrivacyStrings = ModalDetailPrivacyStrings

    const {
        privacyTitle,
        privacyCheckMessage,
        generalDetail,
        privacyButtonTitle } = ModalPrivacyStrings

    const [checked, setChecked] = useState<boolean>(false)

    const setConfirmStorage = async () => {
        if (checked) {
            const localStorage = new LocalStorage()
            localStorage.setPrivacyConfirm(checked, successHandler, errorHandler)
            setShowModal(!checked)
        }
    }

    const successHandler = () => { }

    const errorHandler = (error: string) => { }


    const SubTitlePrivacy = () => {

    }

    const DetailPrivacyText = () => {
        return (
            <ScrollView>
                <Text style={[justifyText]}>{generalDetail}</Text>

                {
                    modalDetailPrivacyStrings.map(({ title, subtitles }, index) => {
                        return (
                            <Text style={[justifyText]} key={index}>
                                <Text style={[boldText]} key={index}>{title}</Text>
                                {
                                    subtitles.map(({ textSubTitle, desc }, index) => {
                                        return (
                                            <Text key={index}>
                                                <Text style={[boldText]} key={index}>{textSubTitle}</Text>
                                                {desc}
                                            </Text>
                                        )
                                    })
                                }
                            </Text>
                        )
                    })
                }
            </ScrollView>

        )
    }

    const TitleModal = () => {
        return <Text style={[boldText]}>{privacyTitle}</Text>
    }

    const DetailPrivacyModal = () => {
        return (
            <View style={detailPrivacyContainer}>
                <DetailPrivacyText />
            </View>
        )
    }

    const CheckboxVerifyPrivacy = () => {
        return (
            <View style={checkBoxArea}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked(!checked) }}
                    color={checked ? '#000' : '#FFF'}
                />
                <Text style={checkBoxMessage}>{privacyCheckMessage}</Text>
            </View>
        )
    }

    const ModalButton = () => {
        return <AppButton
            style={modalButton}
            type={checked ? 'success' : 'successDisable'}
            title={privacyButtonTitle}
            onPress={() => { setConfirmStorage() }} />
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}>
            <View style={modalBackgroundContainer}>
                <View style={modalContainer}>
                    <TitleModal />
                    <DetailPrivacyModal />
                    <CheckboxVerifyPrivacy />
                    <ModalButton />
                </View>
            </View>
        </Modal>
    )
}