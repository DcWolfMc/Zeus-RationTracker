import { FunctionComponent, } from "react"
import {RectButtonProps} from "react-native-gesture-handler"
import {Button, Icon} from "./styles"
interface Props extends RectButtonProps{
    icon: any;
    iconColor: string;
    iconSize: number
}
export const IconButton:FunctionComponent<Props> = ({icon,iconColor,iconSize, onPress, ...rest})=>{
return(
<Button onPress={onPress} {...rest}>
    <Icon  color={iconColor} size={iconSize} name={icon}></Icon>
</Button>
)}