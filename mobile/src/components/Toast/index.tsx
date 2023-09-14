import { FunctionComponent, useEffect, useState } from "react";
import { ToastView, Text } from "./styles";
import React from "react";
import {
  FadeIn,
  FadeOut,
  useSharedValue,
  withSequence,
  withTiming,
  withDelay,
} from "react-native-reanimated";
interface Props {
  visibilaty: boolean;
  text: string;
}
export const ErrorToast: FunctionComponent<Props> = ({ visibilaty, text }) => {
  const opacity = useSharedValue(0);
  useEffect(() => {
    console.log("visibilaty: ", visibilaty);
    console.log("opacity: ", opacity.value);
    if (visibilaty) {
      opacity.value = withSequence(
        withTiming(1, { duration: 300 }),
        withDelay(2000, withTiming(0, { duration: 300 }))
      )
    }
  }, [visibilaty]);
  return (
    <ToastView style={visibilaty?{opacity}:{opacity:0}} >
      <Text>{text}</Text>
    </ToastView>
  );
};
