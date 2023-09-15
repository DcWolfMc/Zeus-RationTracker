import Toast from "react-native-root-toast";
import { defaultTheme } from "../global/styles/theme";
import React, { FunctionComponent, } from "react";

export function ToastMassageSuccess(text: string) {
  Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: `${defaultTheme.colors.green_300}`,
    textColor: `${defaultTheme.colors.gray_300}`,
  });
}
export function ToastMassage(text: string) {
  Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: `${defaultTheme.colors.yellow_300}`,
    textColor: `${defaultTheme.colors.gray_300}`,
  });
}
export function ToastMassageError(text: string) {
  Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,

    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    containerStyle: { elevation: 1000, position: "absolute", zIndex: 999 },
    backgroundColor: `${defaultTheme.colors.red_500}`,
    textColor: `${defaultTheme.colors.gray_300}`,
  });
}
export interface ToastMessageComponentProps {
  visible: boolean;
  text: string;
}
export const ToastMassageErrorComponent: FunctionComponent<ToastMessageComponentProps>
 = ({visible, text}) => {
  return (
    <Toast
      duration={Toast.durations.LONG}
      visible={visible}
      position={10}
      shadow={true}
      animation={true}
      hideOnPress={true}
      delay={0}
      containerStyle={{position:"relative", elevation: 99999999999, zIndex: 999999999999 }}
      backgroundColor={`${defaultTheme.colors.red_500}`}
      textColor={`${defaultTheme.colors.gray_300}`}
    >
      {text}
    </Toast>
  );
};
