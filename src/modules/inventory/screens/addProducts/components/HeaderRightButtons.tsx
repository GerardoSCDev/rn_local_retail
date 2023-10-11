import { View } from "react-native"
import HeaderRightIcon from "./HeaderRightIcon"
import HeaderRightManualIcon from "./HeaderRightManualIcon"

const HeaderRightButtons = () => {
    return (
        <View style={{ flexDirection: 'row', columnGap: 15 }}>
            <HeaderRightIcon />
            <HeaderRightManualIcon />
        </View>
    )
}

export default HeaderRightButtons