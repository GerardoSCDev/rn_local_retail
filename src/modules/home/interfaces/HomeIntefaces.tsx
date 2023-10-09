/* -------------- Import Library -------------- */
import { ParamListBase, RouteProp } from '@react-navigation/native'

export interface ITabIcon {
    route: RouteProp<ParamListBase, string>,
    focused: boolean
}